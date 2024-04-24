import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ExpenseService } from '../services/expense-service';
import { ExpenseDto } from '../entities/expense';
import { ExpenseCategoryDto } from '../entities/expense-category';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css'],
})
export class ExpenseEditComponent {
  expenseForm: FormGroup;
  @Input() id: string;
  operation: string;
  expense: ExpenseDto;
  categories: ExpenseCategoryDto[];

  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private formBuilder: FormBuilder,
    private router: Router,
    http: HttpClient
  ) {
    this.expenseForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      amount: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      creationDate: [''],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.operation = this.route.snapshot.url.slice(-1)[0].path;
      this.setCategories();
      this.handleOperation();
    });
  }

  handleOperation(): void {
    switch (this.operation) {
      case 'edit':
        this.editExpense();
        break;
      case 'delete':
        this.deleteExpense();
        break;
    }
  }

  deleteExpense(): void {
    this.expenseService.deleteExpenseById(this.id).subscribe(() => {
      this.router.navigate(['/expenses']);
    });
  }

  editExpense(): void {
    this.expenseService
      .getExpenseById(this.id)
      .subscribe((data: ExpenseDto) => {
        this.expense = data;
        this.expenseForm.patchValue({
          title: this.expense.title,
          description: this.expense.description,
          amount: this.expense.amount,
          creationDate: this.expense.creationDate,
          category: this.expense.category,
        });
      });
  }

  add() {
    if (this.expenseForm.valid) {
      const formData = this.expenseForm.value;
      formData.creationDate = new Date().toISOString().split('T')[0];
      if (this.operation == 'edit') {
        this.expenseService
          .updateExpense(this.id, formData)
          .subscribe((response: ExpenseDto) => {
            this.router.navigate(['/expenses']);
          });
      } else {
        this.expenseService
          .createExpense(formData)
          .subscribe((response: ExpenseDto) => {
            this.router.navigate(['/expenses']);
          });
      }
    }
  }

  setCategories() {
    this.expenseService
      .getAllExpensesCategories()
      .subscribe((response: ExpenseCategoryDto[]) => {
        this.categories = response;
      });
  }
}

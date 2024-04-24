import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ExpenseService } from '../services/expense-service';
import { ExpenseCategoryDto } from '../entities/expense-category';

@Component({
  selector: 'app-expense-category-edit',
  templateUrl: './expense-category-edit.component.html',
  styleUrls: ['./expense-category-edit.component.css'],
})
export class ExpenseCategoryEditComponent {
  categoryForm: FormGroup;
  @Input() id: string;
  operation: string;
  category: ExpenseCategoryDto;

  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private formBuilder: FormBuilder,
    private router: Router,
    http: HttpClient
  ) {
    this.categoryForm = this.formBuilder.group({
      id: '',
      title: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.operation = this.route.snapshot.url.slice(-1)[0].path;
      this.handleOperation();
    });
  }

  handleOperation(): void {
    switch (this.operation) {
      case 'delete':
        this.deleteCategory();
        break;
      default:
        if (this.id !== null && this.id !== undefined) {
          this.editCategory();
        }
        break;
    }
  }

  editCategory(): void {
    this.expenseService
      .getCategoryById(this.id)
      .subscribe((data: ExpenseCategoryDto) => {
        this.category = data;
        this.categoryForm.patchValue({
          title: this.category.title,
        });
      });
  }

  deleteCategory(): void {
    this.expenseService.deleteCategory(this.id).subscribe((response) => {
      this.router.navigate(['/expenses/categories']);
    });
  }

  add() {
    if (this.categoryForm.valid) {
      const formData: ExpenseCategoryDto = this.categoryForm.value;
      if (this.id !== null && this.id !== undefined) {
        this.expenseService
          .updateCategory(this.id, formData)
          .subscribe((response) => {
            this.router.navigate(['/expenses/categories']);
          });
      } else {
        this.expenseService.createCategory(formData).subscribe((response) => {
          this.router.navigate(['/expenses/categories']);
        });
      }
    }
  }
}

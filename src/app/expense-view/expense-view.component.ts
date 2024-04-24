import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../services/expense-service';
import { ExpenseDto } from '../entities/expense';

@Component({
  selector: 'app-expense-view',
  templateUrl: './expense-view.component.html',
  styleUrls: ['./expense-view.component.css'],
})
export class ExpenseViewComponent {
  expense: ExpenseDto;

  constructor(
    private route: ActivatedRoute,
    private projectService: ExpenseService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const expenseId = params['id'];
      this.projectService.getExpenseById(expenseId).subscribe((data: ExpenseDto) => {
        this.expense = data;
      });
    });
  }
  onEditClick(): void {
    this.router.navigate(['/expenses']);
  }
}

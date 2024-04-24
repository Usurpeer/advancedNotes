import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpenseService } from '../services/expense-service';
import { ExpenseCategoryDto } from '../entities/expense-category';

@Component({
  selector: 'app-expense-category-view',
  templateUrl: './expense-category-view.component.html',
  styleUrls: ['./expense-category-view.component.css'],
})
export class ExpenseCategoryViewComponent {
  categories: ExpenseCategoryDto[];

  constructor(private expenseService: ExpenseService, http: HttpClient) {}

  ngOnInit(): void {
    this.getStatuses();
  }

  getStatuses(): void {
    this.expenseService.getAllExpensesCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}

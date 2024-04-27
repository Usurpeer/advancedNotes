import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExpenseDto } from '../entities/expense';

import { ExpenseService } from '../services/expense-service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  expenses: ExpenseDto[] = [];
  amount: number;

  constructor(private expenseService: ExpenseService, private router: Router) {}

  ngOnInit(): void {
    this.getAmount();
    this.getExpenses();
  }

  getExpenses(): void {
    this.expenseService.getAllExpenses().subscribe((newExpenses) => {
      this.expenses = newExpenses;
    });
  }

  createNote(): void {
    this.router.navigate(['/expenses/new']);
  }

  getAmount(): void {
    this.expenseService.getSumAmount().subscribe((amount) => {
      this.amount = amount;
    });
  }
}

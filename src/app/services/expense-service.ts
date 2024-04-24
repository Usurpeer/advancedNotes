import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ExpenseDto } from '../entities/expense';
import { ExpenseCategoryDto } from '../entities/expense-category';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private http: HttpClient) {}

  httpProperties = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAllExpenses(): Observable<ExpenseDto[]> {
    return this.http.get<ExpenseDto[]>(`${environment.expenseUrl}`);
  }

  getExpenseById(id: string): Observable<ExpenseDto> {
    return this.http.get<ExpenseDto>(`${environment.expenseUrl}/${id}`);
  }

  createExpense(expense: ExpenseDto): Observable<ExpenseDto> {
    return this.http.post<ExpenseDto>(
      `${environment.expenseUrl}`,
      expense,
      this.httpProperties
    );
  }

  updateExpense(id: string, expense: ExpenseDto): Observable<ExpenseDto> {
    return this.http.put<ExpenseDto>(
      `${environment.expenseUrl}/${id}`,
      expense,
      this.httpProperties
    );
  }

  deleteExpenseById(id: string): Observable<ExpenseDto> {
    return this.http.delete<ExpenseDto>(`${environment.expenseUrl}/${id}`);
  }

  getAllExpensesCategories(): Observable<ExpenseCategoryDto[]> {
    return this.http.get<ExpenseCategoryDto[]>(
      `${environment.expenseUrl}/categories`
    );
  }

  getCategoryById(id: string): Observable<ExpenseCategoryDto> {
    return this.http.get<ExpenseCategoryDto>(
      `${environment.expenseUrl}/categories/${id}`
    );
  }

  createCategory(category: ExpenseCategoryDto): Observable<ExpenseCategoryDto> {
    return this.http.post<ExpenseCategoryDto>(
      `${environment.expenseUrl}/categories`,
      category,
      this.httpProperties
    );
  }

  updateCategory(
    id: string,
    category: ExpenseCategoryDto
  ): Observable<ExpenseCategoryDto> {
    return this.http.put<ExpenseCategoryDto>(
      `${environment.expenseUrl}/categories/${id}`,
      category,
      this.httpProperties
    );
  }

  deleteCategory(id: string): Observable<ExpenseCategoryDto> {
    return this.http.delete<ExpenseCategoryDto>(
      `${environment.expenseUrl}/categories/${id}`
    );
  }
}

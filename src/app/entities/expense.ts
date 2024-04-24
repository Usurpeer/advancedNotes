import { ExpenseCategoryDto } from "./expense-category";

export interface ExpenseDto {
    id: string;
    title: string;
    description: string;
    amount: number;
    creationDate: Date;
    category: ExpenseCategoryDto;
  }
  
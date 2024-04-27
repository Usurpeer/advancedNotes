import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskViewComponent } from './task-view/task-view.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskStatusEditComponent } from './task-status-edit/task-status-edit.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';
import { ExpenseViewComponent } from './expense-view/expense-view.component';
import { ExpenseCategoryEditComponent } from './expense-category-edit/expense-category-edit.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { TaskStatusViewComponent } from './task-status-view/task-status-view.component';
import { ExpenseCategoryViewComponent } from './expense-category-view/expense-category-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/new', component: TaskEditComponent },
  { path: 'tasks/statuses', component: TaskStatusViewComponent },
  { path: 'tasks/statuses/new', component: TaskStatusEditComponent },
  { path: 'tasks/statuses/:id', component: TaskStatusEditComponent },
  { path: 'tasks/statuses/:id/delete', component: TaskStatusEditComponent },
  { path: 'tasks/:id', component: TaskViewComponent },
  { path: 'tasks/:id/edit', component: TaskEditComponent },
  { path: 'tasks/:id/delete', component: TaskEditComponent },

  { path: 'expenses', component: ExpenseListComponent },
  { path: 'expenses/new', component: ExpenseEditComponent },
  { path: 'expenses/amount', component: ExpenseListComponent },
  { path: 'expenses/categories', component: ExpenseCategoryViewComponent },
  { path: 'expenses/categories/new', component: ExpenseCategoryEditComponent },
  { path: 'expenses/categories/:id', component: ExpenseCategoryEditComponent },
  {
    path: 'expenses/categories/:id/delete',
    component: ExpenseCategoryEditComponent,
  },
  { path: 'expenses/:id', component: ExpenseViewComponent },
  { path: 'expenses/:id/edit', component: ExpenseEditComponent },
  { path: 'expenses/:id/delete', component: ExpenseEditComponent },

  { path: 'notes', component: NoteListComponent },
  { path: 'notes/new', component: NoteEditComponent },
  { path: 'notes/:id', component: NoteViewComponent },
  { path: 'notes/:id/edit', component: NoteEditComponent },
  { path: 'notes/:id/delete', component: NoteEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

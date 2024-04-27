import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskStatusViewComponent } from './task-status-view/task-status-view.component';
import { TaskStatusEditComponent } from './task-status-edit/task-status-edit.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteListComponent } from './note-list/note-list.component';
import { ExpenseViewComponent } from './expense-view/expense-view.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseCategoryViewComponent } from './expense-category-view/expense-category-view.component';
import { ExpenseCategoryEditComponent } from './expense-category-edit/expense-category-edit.component';
import { TaskService } from './services/task-service';
import { ExpenseService } from './services/expense-service';
import { NoteService } from './services/note-service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskViewComponent,
    TaskStatusViewComponent,
    TaskStatusEditComponent,
    TaskEditComponent,
    NoteViewComponent,
    NoteEditComponent,
    NoteListComponent,
    ExpenseViewComponent,
    ExpenseEditComponent,
    ExpenseListComponent,
    ExpenseCategoryViewComponent,
    ExpenseCategoryEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [TaskService, ExpenseService, NoteService],
  bootstrap: [AppComponent],
})
export class AppModule {}

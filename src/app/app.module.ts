import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProjectListComponent } from './project-list-component/project-list-component.component';
import { EditProjectComponent } from './edit-project-component/edit-project-component.component';
import { TaskListComponent } from './task-list-component/task-list-component.component';
import { ProjectViewComponent } from './project-view-component/project-view-component.component';
import { TaskViewComponent } from './task-view-component/task-view-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    EditProjectComponent,
    TaskListComponent,
    ProjectViewComponent,
    TaskViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

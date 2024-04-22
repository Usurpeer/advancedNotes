import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjectComponent } from './edit-project-component/edit-project-component.component';
import { ProjectListComponent } from './project-list-component/project-list-component.component';
import { ProjectViewComponent } from './project-view-component/project-view-component.component';
import { TaskListComponent } from './task-list-component/task-list-component.component';
import { TaskViewComponent } from './task-view-component/task-view-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/project', pathMatch: 'full' }, // Перенаправление на /project
  { path: 'project', component: ProjectListComponent },
  { path: 'project/new', component: EditProjectComponent },
  { path: 'project/:id', component: ProjectViewComponent },
  { path: 'project/:id/edit', component: EditProjectComponent },
  { path: 'project/:id/tasks', component: TaskListComponent },
  { path: 'project/:id/tasks/:taskId', component: TaskViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

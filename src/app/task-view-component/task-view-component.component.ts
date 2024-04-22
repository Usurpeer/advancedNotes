import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskDto } from '../entities/task';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-task-view-component',
  templateUrl: './task-view-component.component.html',
  styleUrls: ['./task-view-component.component.css'],
})
export class TaskViewComponent {
  task: TaskDto;
  projectId: string;
  taskId: string;
  currentDate: Date;
  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.currentDate = new Date();
    console.log(this.currentDate);
    this.route.params.subscribe((params) => {
      this.projectId = params['id'];
      this.taskId = params['taskId'];
      this.getTask();
    });
  }
  getTask(): void {
    this.taskService
      .getTaskByProjectIdAndTaskId(Number(this.projectId), Number(this.taskId))
      .subscribe((task) => {
        this.task = task;
      });
  }
  delete(): void {
    this.taskService
      .deleteTaskByProjectIdAndTaskId(
        Number(this.projectId),
        Number(this.taskId)
      )
      .subscribe((task) => {
        this.router.navigate(['/project/' + this.projectId + '/tasks']);
        console.log('удалена');
      });
  }
  goBack(): void {
    this.location.back();
  }
  isTaskOverdue(): boolean {
    const taskEndDate: Date = new Date(this.task.deadline);
    return taskEndDate < this.currentDate;
  }
}

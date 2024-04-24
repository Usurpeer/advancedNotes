import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../services/task-service';
import { TaskStatusDto } from '../entities/task-status';

@Component({
  selector: 'app-task-status-view',
  templateUrl: './task-status-view.component.html',
  styleUrls: ['./task-status-view.component.css'],
})
export class TaskStatusViewComponent {
  statuses: TaskStatusDto[];

  constructor(
    private taskService: TaskService,
    http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getStatuses();
  }

  getStatuses(): void {
    this.taskService.getAllTasksStatuses().subscribe((statuses) => {
      this.statuses = statuses;
    });
  }
}

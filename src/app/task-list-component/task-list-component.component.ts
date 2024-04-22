import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task-service';
import { TaskDto } from '../entities/task';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css'],
})
export class TaskListComponent {
  tasks: TaskDto[] = [];
  id: string;
  noDataMessage: string = '';
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getTasksByIdProject();
    });
  }
  getTasksByIdProject(): void {
    this.taskService
      .getTasksByProjectId(Number(this.id))
      .subscribe((tasks) => {
        this.tasks = tasks;
      });
  }
  goBack(): void {
    this.location.back();
  }
}

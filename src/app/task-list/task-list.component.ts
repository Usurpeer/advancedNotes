import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TaskDto } from '../entities/task';

import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: TaskDto[] = [];
  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getAllTasks().subscribe((newTasks) => {
      this.tasks = newTasks;
    });
  }

  createNote(): void {
    this.router.navigate(['/tasks/new']);
  }
}

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task-service';
import { TaskDto } from '../entities/task';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css'],
})
export class TaskViewComponent {
  task: TaskDto;

  constructor(
    private route: ActivatedRoute,
    private projectService: TaskService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const taskId = params['id'];
      this.projectService.getTaskById(taskId).subscribe((data: TaskDto) => {
        this.task = data;
      });
    });
  }
}

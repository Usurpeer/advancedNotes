import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../services/task-service';
import { TaskDto } from '../entities/task';
import { TaskStatusDto } from '../entities/task-status';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
})
export class TaskEditComponent {
  taskForm: FormGroup;
  @Input() id: string;
  operation: string;
  task: TaskDto;
  statuses: TaskStatusDto[];

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private formBuilder: FormBuilder,
    private router: Router,
    http: HttpClient
  ) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      creationDate: [''],
      deadline: [new Date(), Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.operation = this.route.snapshot.url.slice(-1)[0].path;
      this.setStatuses();
      this.handleOperation();
    });
  }

  handleOperation(): void {
    switch (this.operation) {
      case 'edit':
        this.editTask();
        break;
      case 'delete':
        this.deleteTask();
        break;
    }
  }

  deleteTask(): void {
    this.taskService.deleteTaskById(this.id).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }

  editTask(): void {
    this.taskService.getTaskById(this.id).subscribe((data: TaskDto) => {
      this.task = data;
      this.taskForm.patchValue({
        title: this.task.title,
        description: this.task.description,
        deadline: this.task.deadline,
        creationDate: this.task.creationDate,
        status: this.task.status,
      });
    });
  }

  add() {
    if (this.taskForm.valid) {
      const formData = this.taskForm.value;
      formData.deadline = new Date(formData.deadline)
        .toISOString()
        .split('T')[0];
      if (this.operation == 'edit') {
        this.taskService
          .updateTask(this.id, formData)
          .subscribe((response: TaskDto) => {
            this.router.navigate(['/tasks']);
          });
      } else {
        this.taskService.createTask(formData).subscribe((response: TaskDto) => {
          this.router.navigate(['/tasks']);
        });
      }
    }
  }

  setStatuses() {
    this.taskService
      .getAllTasksStatuses()
      .subscribe((response: TaskStatusDto[]) => {
        this.statuses = response;
      });
  }
}

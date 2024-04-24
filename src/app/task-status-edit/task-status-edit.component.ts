import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../services/task-service';
import { TaskStatusDto } from '../entities/task-status';

@Component({
  selector: 'app-task-status-edit',
  templateUrl: './task-status-edit.component.html',
  styleUrls: ['./task-status-edit.component.css'],
})
export class TaskStatusEditComponent {
  statusForm: FormGroup;
  @Input() id: string;
  operation: string;
  status: TaskStatusDto;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private formBuilder: FormBuilder,
    private router: Router,
    http: HttpClient
  ) {
    this.statusForm = this.formBuilder.group({
      id: '',
      title: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.operation = this.route.snapshot.url.slice(-1)[0].path;
      this.handleOperation();
    });
  }

  handleOperation(): void {
    switch (this.operation) {
      case 'delete':
        this.deleteStatus();
        break;
      default:
        if (this.id !== null && this.id !== undefined) {
          this.editStatus();
        }
        break;
    }
  }

  editStatus(): void {
    this.taskService.getStatusById(this.id).subscribe((data: TaskStatusDto) => {
      this.status = data;
      this.statusForm.patchValue({
        title: this.status.title,
      });
    });
  }

  deleteStatus(): void {
    this.taskService.deleteStatus(this.id).subscribe((response) => {
      this.router.navigate(['/tasks/statuses']);
    });
  }

  add() {
    if (this.statusForm.valid) {
      const formData: TaskStatusDto = this.statusForm.value;
      if (this.id !== null && this.id !== undefined) {
        this.taskService
          .updateStatus(this.id, formData)
          .subscribe((response) => {
            this.router.navigate(['/tasks/statuses']);
          });
      } else {
        this.taskService.createStatus(formData).subscribe((response) => {
          this.router.navigate(['/tasks/statuses']);
        });
      }
    }
  }
}

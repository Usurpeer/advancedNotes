import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../services/project-service';
import { ProjectDto } from '../entities/project';

@Component({
  selector: 'app-edit-project-component',
  templateUrl: './edit-project-component.component.html',
  styleUrls: ['./edit-project-component.component.css'],
})
export class EditProjectComponent {
  projectForm: FormGroup;
  @Input() id: string;
  isEditMode: boolean = false;
  project: ProjectDto;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private formBuilder: FormBuilder,
    private router: Router,
    http: HttpClient
  ) {
    this.projectForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (isNaN(Number(this.id))) {
        this.isEditMode = false;
      } else {
        this.isEditMode = true;
        this.projectService
          .getProjectById(Number(this.id))
          .subscribe((data: ProjectDto) => {
            this.project = data;
            this.projectForm.patchValue({
              title: this.project.title,
              description: this.project.description,
              startDate: this.project.startDate,
              endDate: this.project.endDate,
            });
          });
      }
    });
  }

  add() {
    if (this.projectForm.valid) {
      const formData = this.projectForm.value;
      formData.startDate = new Date(formData.startDate)
        .toISOString()
        .split('T')[0];
      formData.endDate = new Date(formData.endDate).toISOString().split('T')[0];
      if (this.isEditMode) {
        this.projectService.updateProject(Number(this.id), formData).subscribe(
          (response: ProjectDto) => {
            this.router.navigate(['/project']);
            console.log(formData.startDate);
            console.log(formData.endDate);
          },
          (error) => {
            console.error('Ошибка при редактировании проекта: ', error);
            console.error('Ошибка: ', error.error);
          }
        );
      } else {
        this.projectService.createProject(formData).subscribe(
          (response: ProjectDto) => {
            this.router.navigate(['/project']);
          },
          (error) => {
            console.error('Ошибка при создании проекта:', error);
            console.error('Ошибка:', error.error);
          }
        );
      }
    }
  }
}

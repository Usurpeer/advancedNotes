import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project-service';
import { ProjectDto } from '../entities/project';

@Component({
  selector: 'app-project-view-component',
  templateUrl: './project-view-component.component.html',
  styleUrls: ['./project-view-component.component.css'],
})
export class ProjectViewComponent {
  project: ProjectDto;
  projectForm: FormGroup;
  openTasksCount: number;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.projectForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      start_pro: ['', Validators.required],
      end_pro: ['', Validators.required],
      openTasksCount: [''],
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const projectId = params['id'];
      this.projectService.getProjectById(projectId).subscribe(
        (data: ProjectDto) => {
          this.project = data;
          this.projectForm.patchValue({
            title: this.project.title,
            description: this.project.description,
            startDate: this.project.startDate,
            endDate: this.project.endDate,
          });
        },
        (error) => {
          console.error('Error loading project:', error);
        }
      );

      this.projectService.getProjectsOpenTaskCount().subscribe(
        (data: any) => {
          this.openTasksCount = data[projectId];
          this.projectForm.patchValue({
            openTasksCount: this.openTasksCount,
          });
        },
        (error) => {
          console.error('Error loading open tasks count:', error);
        }
      );
    });
  }
  onEditClick(): void {
    this.router.navigate(['/project']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectDto } from '../entities/project';
import { ProjectService } from '../services/project-service';

@Component({
  selector: 'app-project-list-component',
  templateUrl: './project-list-component.component.html',
  styleUrls: ['./project-list-component.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects: ProjectDto[] = [];
  filteredProjects: ProjectDto[] = [];
  searchText: string = '';
  noDataMessage: string = '';
  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getAllProjects().subscribe((projects) => {
      console.log(this.projects);
      this.projects = projects;
      this.filteredProjects = projects;
      this.checkNoDataMessage();
    });
  }

  filterProjects(): void {
    this.filteredProjects = this.projects.filter(
      (project) =>
        project.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        project.description
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
    );
    this.checkNoDataMessage();
  }

  checkNoDataMessage(): void {
    this.noDataMessage = this.filteredProjects.length === 0 ? 'No data' : '';
  }

  createProject(): void {
    this.router.navigate(['/project/new']);
  }
}

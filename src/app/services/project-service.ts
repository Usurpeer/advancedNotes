import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ProjectDto } from '../entities/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  httpProperties = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAllProjects(): Observable<ProjectDto[]> {
    return this.http.get<ProjectDto[]>(`${environment.projectUrl}`);
  }

  getProjectById(id: number): Observable<ProjectDto> {
    return this.http.get<ProjectDto>(`${environment.projectUrl}/${id}`);
  }

  createProject(project: ProjectDto): Observable<ProjectDto> {
    return this.http.post<ProjectDto>(
      `${environment.projectUrl}`,
      project,
      this.httpProperties
    );
  }

  updateProject(id: number, project: ProjectDto): Observable<ProjectDto> {
    return this.http.put<ProjectDto>(
      `${environment.projectUrl}/${id}`,
      project,
      this.httpProperties
    );
  }

  getProjectsOpenTaskCount(): Observable<any> {
    return this.http.get<any>(`${environment.projectUrl}/open-tasks-count`);
  }
}

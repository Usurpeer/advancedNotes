import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { TaskDto } from '../entities/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasksByProjectId(id: number): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(`${environment.projectUrl}/${id}/tasks`);
  }

  getTaskByProjectIdAndTaskId(id: number, taskId: number): Observable<TaskDto> {
    return this.http.get<TaskDto>(
      `${environment.projectUrl}/${id}/tasks/${taskId}`
    );
  }

  deleteTaskByProjectIdAndTaskId(
    id: number,
    taskId: number
  ): Observable<TaskDto> {
    return this.http.delete<TaskDto>(
      `${environment.projectUrl}/${id}/tasks/${taskId}`
    );
  }
}

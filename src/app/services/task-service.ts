import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { TaskDto } from '../entities/task';
import { TaskStatusDto } from '../entities/task-status';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  httpProperties = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAllTasks(): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(`${environment.taskUrl}`);
  }

  getTaskById(id: string): Observable<TaskDto> {
    return this.http.get<TaskDto>(`${environment.taskUrl}/${id}`);
  }

  createTask(task: TaskDto): Observable<TaskDto> {
    return this.http.post<TaskDto>(
      `${environment.taskUrl}`,
      task,
      this.httpProperties
    );
  }

  updateTask(id: string, Task: TaskDto): Observable<TaskDto> {
    return this.http.put<TaskDto>(
      `${environment.taskUrl}/${id}`,
      Task,
      this.httpProperties
    );
  }

  deleteTaskById(id: string): Observable<TaskDto> {
    return this.http.delete<TaskDto>(`${environment.taskUrl}/${id}`);
  }

  getAllTasksStatuses(): Observable<TaskStatusDto[]> {
    return this.http.get<TaskStatusDto[]>(`${environment.taskUrl}/statuses`);
  }

  getStatusById(id: string): Observable<TaskStatusDto> {
    return this.http.get<TaskStatusDto>(
      `${environment.taskUrl}/statuses/${id}`
    );
  }

  createStatus(status: TaskStatusDto): Observable<TaskStatusDto> {
    return this.http.post<TaskStatusDto>(
      `${environment.taskUrl}/statuses`,
      status,
      this.httpProperties
    );
  }

  updateStatus(id: string, status: TaskStatusDto): Observable<TaskStatusDto> {
    return this.http.put<TaskStatusDto>(
      `${environment.taskUrl}/statuses/${id}`,
      status,
      this.httpProperties
    );
  }

  deleteStatus(id: string): Observable<TaskStatusDto> {
    return this.http.delete<TaskStatusDto>(
      `${environment.taskUrl}/statuses/${id}`
    );
  }
}

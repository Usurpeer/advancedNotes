import { TaskStatusDto } from './task-status';

export interface TaskDto {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  creationDate: Date;
  status: TaskStatusDto;
}

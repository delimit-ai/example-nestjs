import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";

export interface Task {
  id: number;
  title: string;
  description: string | null;
  status: string;
  created_at: string;
  assigned_to: string | null;
  priority: string;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private nextId = 1;

  findAll(status?: string): Task[] {
    if (status) {
      return this.tasks.filter((t) => t.status === status);
    }
    return this.tasks;
  }

  findOne(id: number): Task {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new NotFoundException("Task not found");
    }
    return task;
  }

  create(dto: CreateTaskDto): Task {
    const task: Task = {
      id: this.nextId++,
      title: dto.title,
      description: dto.description || null,
      status: "pending",
      created_at: new Date().toISOString(),
      assigned_to: dto.assigned_to || null,
      priority: dto.priority,
    };
    this.tasks.push(task);
    return task;
  }
}

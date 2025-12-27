import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private tasks = [
    { id: 1, title: 'Sample Task', isCompleted: false },
    { id: 2, title: 'Another Task', isCompleted: false },
    { id: 3, title: 'Third Task', isCompleted: false },
  ];
  findAll() {
    return this.tasks;
  }
  findById(id: string) {
    const task = this.tasks.find((task) => task.id === parseInt(id));
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }
  createTask(dto: CreateTaskDto) {
    const { title, description, priority, tags } = dto;

    const newTask = {
      id: this.tasks.length + 1,
      title,
      description,
      priority,
      tags,
      isCompleted: false,
    };
    this.tasks.push(newTask);
    return this.tasks;
  }
  updateTask(id: string, dto: UpdateTaskDto) {
    const { title, isCompleted } = dto;
    const task = this.findById(id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    if (title !== undefined) {
      task.title = title;
    }
    if (isCompleted !== undefined) {
      task.isCompleted = isCompleted;
    }
    return task;
  }
  patchUpdate(id: string, dto: Partial<UpdateTaskDto>) {
    const task = this.findById(id);
    Object.assign(task, dto);
    return task;
  }
  deleteTask(id: string) {
    const taskIndex = this.tasks.findIndex((task) => task.id === parseInt(id));
    if (taskIndex === -1) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    this.tasks.splice(taskIndex, 1);
    return this.tasks;
  }
}

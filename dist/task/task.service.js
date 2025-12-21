"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
let TaskService = class TaskService {
    tasks = [
        { id: 1, title: 'Sample Task', isCompleted: false },
        { id: 2, title: 'Another Task', isCompleted: false },
        { id: 3, title: 'Third Task', isCompleted: false },
    ];
    findAll() {
        return this.tasks;
    }
    findById(id) {
        const task = this.tasks.find((task) => task.id === parseInt(id));
        if (!task) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
        return task;
    }
    createTask(dto) {
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
    updateTask(id, dto) {
        const { title, isCompleted } = dto;
        const task = this.findById(id);
        if (!task) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
        if (title !== undefined) {
            task.title = title;
        }
        if (isCompleted !== undefined) {
            task.isCompleted = isCompleted;
        }
        return task;
    }
    patchUpdate(id, dto) {
        const task = this.findById(id);
        Object.assign(task, dto);
        return task;
    }
    deleteTask(id) {
        const taskIndex = this.tasks.findIndex((task) => task.id === parseInt(id));
        if (taskIndex === -1) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
        this.tasks.splice(taskIndex, 1);
        return this.tasks;
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)()
], TaskService);
//# sourceMappingURL=task.service.js.map
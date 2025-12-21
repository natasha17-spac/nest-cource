import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskService {
    private tasks;
    findAll(): {
        id: number;
        title: string;
        isCompleted: boolean;
    }[];
    findById(id: string): {
        id: number;
        title: string;
        isCompleted: boolean;
    };
    createTask(dto: CreateTaskDto): {
        id: number;
        title: string;
        isCompleted: boolean;
    }[];
    updateTask(id: string, dto: UpdateTaskDto): {
        id: number;
        title: string;
        isCompleted: boolean;
    };
    patchUpdate(id: string, dto: Partial<UpdateTaskDto>): {
        id: number;
        title: string;
        isCompleted: boolean;
    };
    deleteTask(id: string): {
        id: number;
        title: string;
        isCompleted: boolean;
    }[];
}

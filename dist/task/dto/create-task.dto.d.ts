export declare enum TaskTag {
    WORK = "work",
    PERSONAL = "personal",
    URGENT = "urgent",
    LOW_PRIORITY = "low_priority"
}
export declare class CreateTaskDto {
    title: string;
    description: string;
    priority: number;
    tags: TaskTag[];
    password: string;
    websiteUrl: string;
    userId: string;
}

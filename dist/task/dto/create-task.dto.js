"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskDto = exports.TaskTag = void 0;
const class_validator_1 = require("class-validator");
const start_with_decorator_1 = require("../decorators/start-with.decorator");
var TaskTag;
(function (TaskTag) {
    TaskTag["WORK"] = "work";
    TaskTag["PERSONAL"] = "personal";
    TaskTag["URGENT"] = "urgent";
    TaskTag["LOW_PRIORITY"] = "low_priority";
})(TaskTag || (exports.TaskTag = TaskTag = {}));
class CreateTaskDto {
    title;
    description;
    priority;
    tags;
    password;
    websiteUrl;
    userId;
}
exports.CreateTaskDto = CreateTaskDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(3, 50),
    (0, start_with_decorator_1.StartWith)('Task: '),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(5, 200),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Priority must be an integer' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)({ message: 'Priority must be a positive integer' }),
    __metadata("design:type", Number)
], CreateTaskDto.prototype, "priority", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'Tags must be an array of strings' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(TaskTag, {
        each: true,
        message: 'Each tag must be a valid TaskTag enum value',
    }),
    __metadata("design:type", Array)
], CreateTaskDto.prototype, "tags", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(8, 15, { message: 'Password must be between 8 and 15 characters' }),
    (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
        message: 'Password must be at least 8 characters long and contain at least one letter and one number',
    }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, {
        message: 'Email must be a valid email address',
    }),
    (0, class_validator_1.IsUrl)({}, { message: 'Website URL must be a valid URL' }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "websiteUrl", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', { message: 'User ID must be a valid UUID v4' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "userId", void 0);
//# sourceMappingURL=create-task.dto.js.map
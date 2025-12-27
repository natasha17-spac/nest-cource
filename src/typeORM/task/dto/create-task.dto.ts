import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  Matches,
} from 'class-validator';
import { StartWith } from '../decorators/start-with.decorator';

export enum TaskTag {
  WORK = 'work',
  PERSONAL = 'personal',
  URGENT = 'urgent',
  LOW_PRIORITY = 'low_priority',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  @StartWith('Task: ')
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 200)
  @IsOptional()
  description: string;

  @IsInt({ message: 'Priority must be an integer' })
  @IsOptional()
  @IsPositive({ message: 'Priority must be a positive integer' })
  priority: number;

  @IsArray({ message: 'Tags must be an array of strings' })
  @IsOptional()
  @IsEnum(TaskTag, {
    each: true,
    message: 'Each tag must be a valid TaskTag enum value',
  })
  tags: TaskTag[];

  @IsString()
  @IsOptional()
  @Length(8, 15, { message: 'Password must be between 8 and 15 characters' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must be at least 8 characters long and contain at least one letter and one number',
  })
  password: string;

  @IsString()
  @IsOptional()
  @Matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, {
    message: 'Email must be a valid email address',
  })
  @IsUrl({}, { message: 'Website URL must be a valid URL' })
  websiteUrl: string;

  @IsUUID('4', { message: 'User ID must be a valid UUID v4' })
  @IsOptional()
  userId: string;
}

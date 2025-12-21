import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title should not be empty' })
  @Length(3, 50, { message: 'Title must be between 3 and 50 characters' })
  title: string;

  @IsNotEmpty({ message: 'Completion status should not be empty' })
  @IsBoolean({ message: 'Completion status must be a boolean value' })
  isCompleted: boolean;
}

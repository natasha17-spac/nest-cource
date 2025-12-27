import { IsBoolean, IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { Genre } from '../entities/movie.entity';

export class MovieDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsInt()
  @Min(1800)
  @Max(2100)
  releaseYear: number;

  @IsOptional()
  @Min(0)
  @Max(10)
  rating?: number;

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @IsOptional()
  @IsEnum(Genre)
  genre?: Genre;
}

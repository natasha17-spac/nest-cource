import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewEntity } from './entity/review.entity';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { MovieModule } from '../movie/movie.module';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewEntity]), MovieModule],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}

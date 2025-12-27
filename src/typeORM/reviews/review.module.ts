import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewEntity } from './entity/review.entity';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { MovieModule } from '../movies/movie.module';
import { ActorEntity } from 'src/actors/entities/actor.entity';
import { MoviePosterEntity } from 'src/movies/entities/poster.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewEntity]), MovieModule, ActorEntity, MoviePosterEntity],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}

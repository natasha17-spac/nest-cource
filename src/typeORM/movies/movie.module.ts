import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { ActorEntity } from 'src/actors/entities/actor.entity';
import { MoviePosterEntity } from './entities/poster.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity, ActorEntity, MoviePosterEntity])],
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule {}

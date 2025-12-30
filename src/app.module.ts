import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movies/movie.module';
import { ConfigModule } from '@nestjs/config';
import { ReviewModule } from './reviews/review.module';
import { ActorModule } from './actors/actor.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MovieModule,
    ActorModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

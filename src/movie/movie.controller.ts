import { MovieService } from './movie.service';
import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';

@Controller({ path: 'movies' })
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.movieService.findById(id);
  }

  @Post()
  create(@Body() dto: MovieDto) {
    return this.movieService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: MovieDto) {
    return this.movieService.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.movieService.delete(id);
  }
}

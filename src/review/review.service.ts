import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewEntity } from './entity/review.entity';
import { Repository } from 'typeorm';
import { ReviewDto } from './dto/create-review.dto';
import { MovieService } from 'src/movie/movie.service';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewEntity)
    private readonly reviewRepository: Repository<ReviewEntity>,
    private readonly movieService: MovieService,
  ) {}

  async findAll() {
    return this.reviewRepository.find();
  }

  async findOne(id: string) {
    return this.reviewRepository.findOne({ where: { id } });
  }

  async create(data: ReviewDto): Promise<ReviewEntity> {
    const { text, rating, movieId } = data;
    const movie = await this.movieService.findById(movieId);
    if (!movie) {
      throw new Error('sdd');
    }
    const review = this.reviewRepository.create({ text, rating, movie });
    return this.reviewRepository.save(review);
  }

  async remove(id: string) {
    return this.reviewRepository.delete(id);
  }
}

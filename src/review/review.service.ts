import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewEntity } from './entity/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewEntity)
    private readonly reviewRepository: Repository<ReviewEntity>,
  ) {}

  async findAll() {
    return this.reviewRepository.find();
  }

  async findOne(id: string) {
    return this.reviewRepository.findOne({ where: { id } });
  }

  async create(data: CreateReviewDto) {
    const review = this.reviewRepository.create(data);
    return this.reviewRepository.save(review);
  }

  async remove(id: string) {
    return this.reviewRepository.delete(id);
  }
}

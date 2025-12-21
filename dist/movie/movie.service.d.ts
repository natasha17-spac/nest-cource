import { MovieEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';
export declare class MovieService {
    private readonly movieRepository;
    constructor(movieRepository: Repository<MovieEntity>);
    findAll(): Promise<MovieEntity[]>;
}

import { MovieService } from './movie.service';
import type { Request, Response } from 'express';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    findAll(genre: string): Promise<import("./entities/movie.entity").MovieEntity[]>;
    getHeaders(headers: Record<string, string>): Record<string, string>;
    getUserAgent(userAgent: string): {
        'User-Agent': string;
    };
    getRequestHeaders(req: Request): {
        method: string;
        headers: import("http").IncomingHttpHeaders;
        body: any;
        query: import("qs").ParsedQs;
        url: string;
        params: import("express-serve-static-core").ParamsDictionary;
    };
    getResponseHeaders(res: Response): {
        statusCode: number;
        statusMessage: string;
        headersSent: boolean;
        finished: boolean;
        locals: Record<string, any> & import("express-serve-static-core").Locals;
        httpVersion: string;
        message: string;
    };
    getResponseMethods(res: Response): {
        message: string;
        availableMethods: string[];
        availableProperties: string[];
    };
}

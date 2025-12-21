"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./movie.service");
let MovieController = class MovieController {
    movieService;
    constructor(movieService) {
        this.movieService = movieService;
    }
    findAll(genre) {
        return this.movieService.findAll(genre);
    }
    getHeaders(headers) {
        console.log(headers);
        return headers;
    }
    getUserAgent(userAgent) {
        return { 'User-Agent': userAgent };
    }
    getRequestHeaders(req) {
        return {
            method: req.method,
            headers: req.headers,
            body: req.body,
            query: req.query,
            url: req.url,
            params: req.params,
        };
    }
    getResponseHeaders(res) {
        res.status(201);
        return {
            statusCode: res.statusCode,
            statusMessage: res.statusMessage,
            headersSent: res.headersSent,
            finished: res.writableEnded,
            locals: res.locals,
            httpVersion: res.req?.httpVersion,
            message: 'Created',
        };
    }
    getResponseMethods(res) {
        res.setHeader('X-Custom-Header', 'MyValue');
        res.setHeader('X-Powered-By', 'NestJS');
        res.cookie('sessionId', '12345', {
            httpOnly: true,
            maxAge: 3600000,
        });
        return {
            message: 'Check response headers and cookies',
            availableMethods: [
                'res.status(code) - установить статус код',
                'res.json(data) - отправить JSON',
                'res.send(data) - отправить данные',
                'res.sendFile(path) - отправить файл',
                'res.redirect(url) - перенаправление',
                'res.setHeader(name, value) - установить header',
                'res.getHeader(name) - получить header',
                'res.removeHeader(name) - удалить header',
                'res.cookie(name, value, options) - установить cookie',
                'res.clearCookie(name) - удалить cookie',
                'res.type(type) - установить Content-Type',
                'res.format(object) - content negotiation',
                'res.attachment(filename) - для скачивания файлов',
                'res.download(path) - скачать файл',
                'res.end() - завершить response',
            ],
            availableProperties: [
                'res.statusCode - текущий статус код',
                'res.statusMessage - сообщение статуса',
                'res.headersSent - отправлены ли headers',
                'res.locals - локальные переменные',
                'res.req - объект request',
                'res.writableEnded - завершен ли response',
            ],
        };
    }
};
exports.MovieController = MovieController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('genre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('headers'),
    __param(0, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "getHeaders", null);
__decorate([
    (0, common_1.Get)('user-agent'),
    __param(0, (0, common_1.Headers)('user-agent')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "getUserAgent", null);
__decorate([
    (0, common_1.Get)('request'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "getRequestHeaders", null);
__decorate([
    (0, common_1.Get)('response'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "getResponseHeaders", null);
__decorate([
    (0, common_1.Get)('response-methods'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "getResponseMethods", null);
exports.MovieController = MovieController = __decorate([
    (0, common_1.Controller)({ path: 'movies' }),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
//# sourceMappingURL=movie.controller.js.map
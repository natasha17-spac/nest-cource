import { Controller, Get, Headers, Req, Res } from '@nestjs/common';
import { MovieService } from './movie.service';
import type { Request, Response } from 'express';

@Controller({ path: 'movies' })
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('headers')
  getHeaders(@Headers() headers: Record<string, string>) {
    console.log(headers);
    return headers;
  }

  @Get('user-agent')
  getUserAgent(@Headers('user-agent') userAgent: string) {
    return { 'User-Agent': userAgent };
  }

  @Get('request')
  getRequestHeaders(@Req() req: Request) {
    return {
      method: req.method,
      headers: req.headers,
      body: req.body,
      query: req.query,
      url: req.url,
      params: req.params,
    };
  }

  @Get('response')
  getResponseHeaders(@Res({ passthrough: true }) res: Response) {
    res.status(201);

    // Основные свойства Response объекта
    return {
      // Установленный статус код
      statusCode: res.statusCode,
      statusMessage: res.statusMessage,

      // Headers
      headersSent: res.headersSent,

      // Информация о подключении
      finished: res.writableEnded,

      // Локальные переменные (для шаблонов)
      locals: res.locals,

      // HTTP версия
      httpVersion: res.req?.httpVersion,

      message: 'Created',
    };
  }

  @Get('response-methods')
  getResponseMethods(@Res({ passthrough: true }) res: Response) {
    // Пример использования различных методов Response

    // Установка headers
    res.setHeader('X-Custom-Header', 'MyValue');
    res.setHeader('X-Powered-By', 'NestJS');

    // Установка cookies
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
}

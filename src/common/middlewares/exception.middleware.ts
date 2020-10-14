import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response } from 'express';

@Catch()
export class ExceptionMiddleware implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        let status = 500;
        let message = 'Internal server error'

        if(exception instanceof HttpException) {
            const status = exception.getStatus();
            response.status(status).json({ message: exception.message });
        }

        response.status(status).json({ message });
    }
}
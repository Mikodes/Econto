import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Response } from 'express';

@Catch()
export class ExceptionMiddleware implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        let status = 500;
        let message = 'Internal server error'

        if(exception instanceof HttpException) {
            status = exception.getStatus();
            message = exception.message;
        }

        response.status(status).json({ message });
        
        if(exception instanceof Error) message = exception.message;
        Logger.error(`Exception occured: ${message}`);
    }
}
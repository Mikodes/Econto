import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Response } from 'express';
import { BaseException } from "../exceptions/base.exception";

@Catch()
export class ExceptionMiddleware implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        let id: number = 0;
        let status: number = 500;
        let message: string = 'Internal server error'

        if(exception instanceof HttpException) {
            status = exception.getStatus();
            message = exception.message;
        }

        if(exception instanceof BaseException) {
            id = exception.id;
            status = exception.statusCode;
            message = exception.message;
        }

        response.status(status).json({ error: { id, message }});
        
        if(exception instanceof Error) message = exception.message;
        Logger.error(`Exception occured: ${message}`);
    }
}
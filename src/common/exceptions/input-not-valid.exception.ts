import { BaseException } from "./base.exception";

export class InputNotValidException extends BaseException {
    id = 101;
    statusCode = 400;
    message = '';

    public constructor(message: string) {
        super();
        
        this.message = message;
    }
}
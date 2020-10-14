import { BaseException } from "./base.exception";

export class InvalidPasswordException extends BaseException {
    id = 103;
    statusCode = 401;
    message = 'Provided password is invalid'
}
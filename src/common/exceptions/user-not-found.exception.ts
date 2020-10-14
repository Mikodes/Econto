import { BaseException } from "./base.exception";

export class ShoesNotFoundException extends BaseException {
    id = 102;
    statusCode = 404;
    message = 'User does not exist'
}
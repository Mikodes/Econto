import { BaseException } from "./base.exception";

export class ShoesNotFoundException extends BaseException {
    id = 100;
    statusCode = 404;
    message = 'Shoes do not exist'
}
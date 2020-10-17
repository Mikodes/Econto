import { BaseException } from "./base.exception";

export class JacketNotFoundException extends BaseException {
    id = 104;
    statusCode = 404;
    message = 'Jacket does not exist'
}
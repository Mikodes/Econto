import { BaseException } from "./base.exception";

export class BagNotFoundException extends BaseException {
    id = 105;
    statusCode = 404;
    message = 'Bag does not exist'
}
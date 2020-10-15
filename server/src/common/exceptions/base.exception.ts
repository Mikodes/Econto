export abstract class BaseException extends Error {
    public abstract id: number = 0;
    public abstract statusCode: number = 500;
    public abstract message: string = 'Internal server error';
}
declare namespace Express {
    export interface Request {
        user?: IUserPaylaod
    }
}

export interface IUserPaylaod {
    id: string;
    username: string;
}
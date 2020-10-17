import { Bag } from "src/models/bag/entities/bag.entity";
import { Jacket } from "src/models/jacket/entities/jacket.entity";
import { Shoes } from "src/models/shoes/entities/shoes.entity";
import { User } from "src/models/user/entities/user.entity";

declare namespace Express {
    export interface Request {
        user?: IUserPaylaod
    }
}

export interface IUserPaylaod {
    id: string;
    username: string;
}

export type TEntity = Shoes | User | Jacket | Bag;
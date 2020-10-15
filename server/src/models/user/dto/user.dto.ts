import { assignObject } from "../../../common/helpers/assign-object";
import { User } from "../entities/user.entity";

export class UserResponse implements Readonly<UserResponse> {
    id: string;

    username: string;

    public static fromObject(object: Partial<UserResponse>): UserResponse {
        const userResponse = new UserResponse();

        assignObject<UserResponse>(userResponse, object, FIELDS);

        return userResponse;
    }

    public toEntity(): User {
        const entity = new User();

        assignObject<User>(entity, this, FIELDS);

        return entity;
    }
}

const FIELDS: string[] = ['id', 'username'];
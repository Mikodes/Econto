import { Injectable } from "@nestjs/common";
import { InvalidPasswordException } from "src/common/exceptions/invalid-password.exception";
import { UserNotFoundException } from "src/common/exceptions/user-not-found.exception";
import { compareStringToHash } from "src/common/helpers/compare-string-to-hash";
import { User } from "src/models/user/entities/user.entity";
import { UsersService } from "src/models/user/users.service";

@Injectable()
export class AuthService  {
    constructor(private readonly _usersService: UsersService) {}

    public async validateUser(username: string, password: string): Promise<void> {
        const user: User = await this._usersService.getByUsername(username);
        if(!user) throw new UserNotFoundException();

        const isPasswordValid: boolean = await compareStringToHash(password, user.password);
        if(!isPasswordValid) throw new InvalidPasswordException();
    }
}
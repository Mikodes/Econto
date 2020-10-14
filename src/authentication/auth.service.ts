import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InvalidPasswordException } from "../common/exceptions/invalid-password.exception";
import { UserNotFoundException } from "../common/exceptions/user-not-found.exception";
import { compareStringToHash } from "../common/helpers/compare-string-to-hash";
import { User } from "../models/user/entities/user.entity";
import { UsersService } from "../models/user/users.service";

@Injectable()
export class AuthService {
    constructor(private readonly _usersService: UsersService, private readonly _jwtService: JwtService) {}

    public async validateUser(username: string, password: string): Promise<void> {
        const user: User = await this._usersService.getByUsername(username);
        if(!user) throw new UserNotFoundException();

        const isPasswordValid: boolean = await compareStringToHash(password, user.password);
        if(!isPasswordValid) throw new InvalidPasswordException();
    }

    public login(user: User): { accessToken: string } {
        const payload = { username: user.username, id: user.id };

        return { accessToken: this._jwtService.sign(payload) }
    }
}
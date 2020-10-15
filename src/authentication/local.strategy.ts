import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from "./auth.service";
import { User } from "src/models/user/entities/user.entity";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly _authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<User> {
        const user = await this._authService.validateUser(username, password);

        return user;
    }
}
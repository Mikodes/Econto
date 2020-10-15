import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from "../auth.service";
import { UserResponse } from "../../models/user/dto/user.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    public constructor(private readonly _authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<UserResponse> {
        const user = await this._authService.validateUser(username, password);
        const userResponse = UserResponse.fromObject(user);

        return userResponse;
    }
}
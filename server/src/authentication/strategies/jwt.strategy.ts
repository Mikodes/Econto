import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IUserPaylaod } from "../../types";
import { UserResponse } from "../../models/user/dto/user.dto";
import config from '../../config';
import { AuthService } from "../auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    public constructor(private readonly _authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.AUTH.SECRET
        });
    }

    public async validate(user: IUserPaylaod): Promise<UserResponse> {
        await this._authService.checkIfUserExistsInDatabase(user.username);

        return UserResponse.fromObject({
            id: user.id,
            username: user.username
        });
    }
}
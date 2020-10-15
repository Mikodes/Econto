import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IUserPaylaod } from "../../types";
import { UserResponse } from "../../models/user/dto/user.dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    public constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.AUTH_SECRET
        });
    }

    public async validate(payload: IUserPaylaod): Promise<UserResponse> {
        return UserResponse.fromObject({
            id: payload.id,
            username: payload.username
        });
    }
}
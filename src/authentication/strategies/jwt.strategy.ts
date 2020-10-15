import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserResponse } from "src/models/user/dto/user.dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    public constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.AUTH_SECRET
        });
    }

    public async validate(payload: any): Promise<UserResponse> {
        return UserResponse.fromObject({
            id: payload.id,
            username: payload.username
        });
    }
}
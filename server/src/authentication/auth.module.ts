import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "../models/user/users.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./strategies/local.strategy";
import config from '../config';

@Module({
    imports: [UsersModule, PassportModule, JwtModule.register({
        secret: config.AUTH.SECRET,
        signOptions: { expiresIn: '24h' }
    })],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService]
})

export class AuthModule {}
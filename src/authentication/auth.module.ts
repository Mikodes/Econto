import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthConfigModule } from "src/config/auth/config.module";
import { UsersModule } from "src/models/user/users.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports: [UsersModule, PassportModule, AuthConfigModule, JwtModule.register({
        secret: process.env.AUTH_SECRET,
        signOptions: { expiresIn: '24h' }
    })],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService]
})

export class AuthModule {}
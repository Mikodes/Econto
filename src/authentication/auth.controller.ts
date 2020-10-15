import { Controller, UseGuards, Post, Req } from "@nestjs/common";
import { Request } from 'express';
import { LocalAuthGuard } from "../common/guards/local-auth.guard";
import { User } from "../models/user/entities/user.entity";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly _authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Req() req: Request) {
        console.log('Login route - controller');
        // return this._authService.login(req.user as User);
        return req.user;
    }
}
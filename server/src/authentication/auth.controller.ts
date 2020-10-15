import { Controller, UseGuards, Post, Req } from "@nestjs/common";
import { Request } from 'express';
import { LocalAuthGuard } from "../common/guards/local-auth.guard";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly _authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Req() req: Request) {
        return this._authService.login(req.user);
    }
}
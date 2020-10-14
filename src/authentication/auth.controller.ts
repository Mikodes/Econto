import { Controller, UseGuards, Post, Req } from "@nestjs/common";
import { Request } from 'express';
import { LocalAuthGuard } from "src/common/guards/local-auth.guard";

@Controller('auth')
export class AuthController {

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Req() req: Request) {
        return req.user;
    }
}
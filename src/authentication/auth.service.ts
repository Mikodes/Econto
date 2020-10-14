import { Injectable } from "@nestjs/common";
import { User } from "src/models/user/entities/user.entity";
import { UsersService } from "src/models/user/users.service";

@Injectable()
export class AuthService  {
    constructor(private readonly _usersService: UsersService) {}

    public async validateUser(username: string, password: string): Promise<boolean> {
        const user: User = await this._usersService.getByUsername(username);
        
        
    }
}
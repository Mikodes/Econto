import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly _userRepository: Repository<User>) { }

    public async getByUsername(username: string): Promise<User | null> {
        const users: User[] = await this._userRepository.find({ username });
        return users[0];
    }
}
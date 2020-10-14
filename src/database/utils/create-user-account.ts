import { User } from "../../models/user/entities/user.entity";
import { UsersService } from "../../models/user/users.service";
import { Connection, ConnectionOptions, createConnection } from "typeorm";
import { getOrmConfig } from "./read-orm-config";
import { UserResponse } from "../../models/user/dto/user.dto";
import { random } from 'faker';
import { hashString } from "src/common/helpers/hash-string";
import { green } from 'chalk';
import { sleep } from "src/common/helpers/sleep";

async function run(): Promise<void> {
    const connection: Connection = await createConnection(getOrmConfig() as ConnectionOptions);
    const usersService: UsersService = new UsersService(connection.getRepository(User));

    const dto: UserResponse = UserResponse.fromObject(generateUser());
    const entityWithHashedPassword: User = { ...dto.toEntity(), password: await hashString(dto.password) };

    await usersService.create(entityWithHashedPassword);
    console.log(green('User generated successfully'));

    sleep(1500);
    console.log(dto);
}

function generateUser(): Partial<UserResponse> {
    return {
        username: random.word(),
        password: random.word()
    };
}

run();
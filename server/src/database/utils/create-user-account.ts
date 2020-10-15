import { User } from "../../models/user/entities/user.entity";
import { UsersService } from "../../models/user/users.service";
import { ConnectionOptions, createConnection } from "typeorm";
import { getOrmConfig } from "./read-orm-config";
import { UserResponse } from "../../models/user/dto/user.dto";
import { random } from 'faker';
import { hashString } from "src/common/helpers/hash-string";
import { green } from 'chalk';
import { sleep } from "src/common/helpers/sleep";

generateUserAccount();

async function generateUserAccount(): Promise<void> {
    const connectionOptions = getOrmConfig() as ConnectionOptions;
    const connection = await createConnection(connectionOptions);

    const repository = connection.getRepository(User);
    const usersService = new UsersService(repository);

    await new UserAccountGenerator(usersService).run();
}

class UserAccountGenerator {
    public constructor(private readonly _usersService: UsersService) {}

    public async run(): Promise<void> {
        const userCredentials = this.generateFakeCredentials();

        const userEntity = this.createEntityFromFakeData(userCredentials);

        const userEntityWithHashedPassword = await this.getUserEntityWithHashedPassword(userEntity);

        await this._usersService.create(userEntityWithHashedPassword);

        await this.printCredentialsAfterSleep(userEntity);
    }
    
    private generateFakeCredentials(): Partial<User> {
        return {
            username: random.alphaNumeric(5),
            password: random.alphaNumeric(5)
        };
    }

    private createEntityFromFakeData(generatedUser: Partial<UserResponse>): User {
        const userResponse = UserResponse.fromObject(generatedUser);
        const entity = userResponse.toEntity();

        return entity;
    }

    private async getUserEntityWithHashedPassword(userEntity: User): Promise<User> {
        const hashedPassword = await hashString(userEntity.password);
        const userEntityWithHashedPassword = { ...userEntity, password: hashedPassword };

        return userEntityWithHashedPassword;
    }
    
    private async printCredentialsAfterSleep(entity: User): Promise<void> {
        console.log(green('User generated successfully'));
    
        await sleep(1500);
    
        console.log({
            username: entity.username,
            password: entity.password
        });
    }
}
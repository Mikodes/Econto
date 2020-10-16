import { User } from "../../models/user/entities/user.entity";
import { UsersService } from "../../models/user/users.service";
import { ConnectionOptions, createConnection, Repository } from "typeorm";
import { getOrmConfig } from "./read-orm-config";
import { UserResponse } from "../../models/user/dto/user.dto";
import { random } from 'faker';
import { hashString } from "../../common/helpers/hash-string";
import { green } from 'chalk';
import { sleep } from "../../common/helpers/sleep";
import { RepositoryGetter } from "./repository-getter";
import { Entity } from "../../common/constants";

class UserAccountGenerator {
    public constructor(private readonly _usersService: UsersService) {}

    public static async generateUserAccount(): Promise<void> {
        const repository = await new RepositoryGetter().getRepository(Entity.USER);
        const service = new UsersService(repository as Repository<User>);

        await new UserAccountGenerator(service).run();
    }

    private async run(): Promise<void> {
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

UserAccountGenerator.generateUserAccount();
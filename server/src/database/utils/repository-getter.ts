import { Shoes } from "../../models/shoes/entities/shoes.entity";
import { User } from "../../models/user/entities/user.entity";
import { Connection, ConnectionOptions, createConnection, Repository } from "typeorm";
import { getOrmConfig } from "./read-orm-config";
import { Entity } from "../../common/constants";
import { TEntity } from "src/types";

export class RepositoryGetter {
    public async getRepository(entity: Entity): Promise<Repository<TEntity>> {
        const connection = await this.initiateConnection();
        const repository = this.returnRepositoryByEntity(connection, entity);

        return repository;
    }

    private returnRepositoryByEntity(connection: Connection, entity: Entity): Repository<TEntity> {
        switch(entity) {
            case Entity.SHOES:
                return connection.getRepository(Shoes);
            case Entity.USER:
                return connection.getRepository(User);
        }
    }

    private async initiateConnection(): Promise<Connection> {
        const connectionOptions = getOrmConfig() as ConnectionOptions;
        const connection = await createConnection(connectionOptions);

        return connection;
    }
}
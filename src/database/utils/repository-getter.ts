import { Shoes } from "../../models/shoes/entities/shoes.entity";
import { User } from "../../models/user/entities/user.entity";
import { Connection, ConnectionOptions, createConnection, Repository } from "typeorm";
import { OrmConfigReader } from "./read-orm-config";
import { Entity } from "../../common/constants";
import { TEntity } from "../../types";
import { Jacket } from "../../models/jacket/entities/jacket.entity";
import { Bag } from "src/models/bag/entities/bag.entity";

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
            case Entity.JACKET:
                return connection.getRepository(Jacket);
            case Entity.BAG:
                return connection.getRepository(Bag);
            default:
                throw new Error('Entity not found');
        }
    }

    private async initiateConnection(): Promise<Connection> {
        const connectionOptions = new OrmConfigReader().getOrmConfig() as ConnectionOptions;
        const connection = await createConnection(connectionOptions);

        return connection;
    }
}
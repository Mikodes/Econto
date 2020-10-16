import { Shoes } from "src/models/shoes/entities/shoes.entity";
import { Connection, ConnectionOptions, createConnection, Repository } from "typeorm";
import { getOrmConfig } from "./read-orm-config";

class RepositoryGetter {
    public async getRepository(): Promise<Repository<Shoes>> {
        const connection = await this.initiateConnection();
        const repository = connection.getRepository(Shoes);

        return repository;
    }

    private async initiateConnection(): Promise<Connection> {
        const connectionOptions = getOrmConfig() as ConnectionOptions;
        const connection = await createConnection(connectionOptions);

        return connection;
    }
}
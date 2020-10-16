import fs = require('fs');
import config from '../../config';

class OrmConfigGenerator {
    public generateOrmConfig(): void {
        fs.writeFileSync('ormconfig.json', JSON.stringify({
            ...this.getOptionsFromEnvironmentVariables(),
            type: "postgres",
            entities: [
                "**/*.entity{.ts,.js}"
            ],
            migrationsTableName: "migrations",
            migrations: [
                "src/database/migrations/*.ts"
            ],
            cli: {
                "migrationsDir": "src/database/migrations"
            }
        }, null, 2));
    }

    private getOptionsFromEnvironmentVariables() {
        return {
            ssl: config.APP.MODE === 'production' ? true : false,
            host: config.DATABASE.HOST,
            port: config.DATABASE.PORT,
            username: config.DATABASE.USER,
            password: config.DATABASE.PASSWORD,
            database: config.DATABASE.NAME
        }
    }
}

new OrmConfigGenerator().generateOrmConfig();
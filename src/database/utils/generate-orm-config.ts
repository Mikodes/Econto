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
        return config.DATABASE.IS_LOCAL === 'true' ? {
            ssl: config.APP.MODE === 'production' ? true : false,
            host: config.DATABASE.HOST,
            port: config.DATABASE.PORT,
            username: config.DATABASE.USER,
            password: config.DATABASE.PASSWORD,
            database: config.DATABASE.NAME
        } : {
            ssl: config.APP.MODE === 'production' ? true : false,
            url: config.DATABASE.URL
        }
    }
}

new OrmConfigGenerator().generateOrmConfig();
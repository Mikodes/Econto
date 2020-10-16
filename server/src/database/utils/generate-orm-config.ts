import fs = require('fs');
import * as dotenv from 'dotenv';

dotenv.config();

class ConfigGenerator {
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
            ssl: process.env.APP_MODE === 'production' ? true : false,
            host: process.env.POSTGRES_HOST,
            port: process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE_NAME
        }
    }
}

new ConfigGenerator().generateOrmConfig();
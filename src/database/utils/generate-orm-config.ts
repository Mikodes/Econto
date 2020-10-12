import fs = require('fs');
import 'dotenv/config';

fs.writeFileSync('ormconfig.json', JSON.stringify({
    type: "postgres",
    ssl: process.env.APP_MODE === 'production' ? true : false,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE_NAME,
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
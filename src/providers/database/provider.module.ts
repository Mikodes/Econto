import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import config from "../../config";

const databaseConfig = config.DATABASE.IS_LOCAL === 'true' ? {
    host: config.DATABASE.HOST,
    port: config.DATABASE.PORT,
    database: config.DATABASE.NAME,
} : 
{   
    url: config.DATABASE.URL
}

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async () => ({
                ...databaseConfig,
                username: config.DATABASE.USER,
                password: config.DATABASE.PASSWORD,
                type: 'postgres',
                entities: [`${config.APP.MODE === 'development' ? 'src/**/*.entity.ts' : 'dist/**/*.entity.js'}`],
                migrationsTableName: 'migrations',
                migrations: [`${config.APP.MODE === 'development' ? 'src/database/migrations/*.ts' : 'dist/database/migrations/*.js'}`],
                cli: {
                    migrationsDir: `${config.APP.MODE === 'development' ? 'src/database/migrations' : 'dist/database/migrations'}`
                }
            })
        } as TypeOrmModuleAsyncOptions)
    ]
})

export class PostgresDatabaseProviderModule {}
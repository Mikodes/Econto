import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import config from "../../config";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async () => ({
                type: 'postgres',
                host: config.DATABASE.HOST,
                port: config.DATABASE.PORT,
                username: config.DATABASE.USER,
                password: config.DATABASE.PASSWORD,
                database: config.DATABASE.NAME,
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
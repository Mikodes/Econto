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
                entities: ['**/*.entity{.ts,.js}'],
                migrationsTableName: 'migrations',
                migrations: ['src/database/migrations/*.ts'],
                cli: {
                    migrationsDir: 'src/database/migrations'
                }
            })
        } as TypeOrmModuleAsyncOptions)
    ]
})

export class PostgresDatabaseProviderModule {}
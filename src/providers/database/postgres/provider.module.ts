import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { PostgresConfigService } from "../../../config/database/postgres/config.service";
import { PostgresConfigModule } from '../../../config/database/postgres/config.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [PostgresConfigModule],
            useFactory: async (postgresConfgiService: PostgresConfigService) => ({
                type: 'postgres',
                host: postgresConfgiService.host,
                port: postgresConfgiService.port,
                username: postgresConfgiService.user,
                password: postgresConfgiService.password,
                database: postgresConfgiService.databaseName,
                entities: ['**/*.entity{.ts,.js}'],
                migrationsTableName: 'migrations',
                migrations: ['src/database/migrations/*.ts'],
                cli: {
                    migrationsDir: 'src/database/migrations'
                }
            }),
            inject: [PostgresConfigService]
        } as TypeOrmModuleAsyncOptions)
    ]
})

export class PostgresDatabaseProviderModule {}
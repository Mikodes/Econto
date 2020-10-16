import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { PostgresConfigService } from "../../config/database/postgres/config.service";
import { PostgresConfigModule } from '../../config/database/postgres/config.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [PostgresConfigModule],
            useFactory: async (postgresConfigService: PostgresConfigService) => ({
                type: 'postgres',
                host: postgresConfigService.host,
                port: postgresConfigService.port,
                username: postgresConfigService.user,
                password: postgresConfigService.password,
                database: postgresConfigService.databaseName,
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
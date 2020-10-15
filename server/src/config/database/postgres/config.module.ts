import { Module } from '@nestjs/common';
import configuration from './configuration';
import { PostgresConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { object, string, number } from "@hapi/joi";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: object({
                POSTGRES_HOST: string().default('127.0.0.1'),
                POSTGRES_PORT: number().default('5432'),
                POSTGRES_USER: string().default('user'),
                POSTGRES_PASSWORD: string().default('password'),
                POSTGRES_DATABASE_NAME: string().default('main')
            })
        })
    ],
    providers: [ConfigService, PostgresConfigService],
    exports: [ConfigService, PostgresConfigService]
})

export class PostgresConfigModule {}
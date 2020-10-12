import { Module } from '@nestjs/common';
import configuration from './configuration';
import { PostgresConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from "@hapi/joi";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: Joi.object({
                POSTGRES_HOST: Joi.string().default('127.0.0.1'),
                POSTGRES_PORT: Joi.number().default('5432'),
                POSTGRES_USER: Joi.string().default('user'),
                POSTGRES_PASSWORD: Joi.string().default('password'),
                POSTGRES_DATABASE_NAME: Joi.string().default('main')
            })
        })
    ],
    providers: [ConfigService, PostgresConfigService],
    exports: [ConfigService, PostgresConfigService]
})

export class AppConfigModule {}
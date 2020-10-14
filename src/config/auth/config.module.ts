import { Module } from '@nestjs/common';
import configuration from './configuration';
import { AuthConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from "@hapi/joi";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: Joi.object({
                AUTH_SECRET: Joi.string()
            })
        })
    ],
    providers: [ConfigService, AuthConfigService],
    exports: [ConfigService, AuthConfigService]
})

export class AuthConfigModule {}
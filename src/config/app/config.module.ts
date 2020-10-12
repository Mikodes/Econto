import { Module } from '@nestjs/common';
import configuration from './configuration';
import { AppConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import validationSchema from './validation-schema';

//TODO: Create more configs from .env
//TODO: Remove unnecessary .env variables
//TODO: Remove config.service.ts

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: validationSchema
        })
    ],
    providers: [ConfigService, AppConfigService],
    exports: [ConfigService, AppConfigService]
})

export class AppConfigModule {}
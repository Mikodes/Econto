import { Module } from '@nestjs/common';
import configuration from './configuration';
import { AppConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { object, string, number } from "@hapi/joi";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: object({
                APP_PORT: number().default('4000'),
                APP_MODE: string().valid('development', 'production', 'test').default('development'),
                APP_PREFIX: string().default('/api/v1')
            })
        })
    ],
    providers: [ConfigService, AppConfigService],
    exports: [ConfigService, AppConfigService]
})

export class AppConfigModule {}
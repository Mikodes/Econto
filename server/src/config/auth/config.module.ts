import { Module } from '@nestjs/common';
import configuration from './configuration';
import { AuthConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { object, string } from "@hapi/joi";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: object({
                AUTH_SECRET: string()
            })
        })
    ],
    providers: [ConfigService, AuthConfigService],
    exports: [ConfigService, AuthConfigService]
})

export class AuthConfigModule {}
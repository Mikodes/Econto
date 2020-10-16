import { Module } from '@nestjs/common';
import configuration from './configuration';
import { AuthConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration]
        })
    ],
    providers: [ConfigService, AuthConfigService],
    exports: [ConfigService, AuthConfigService]
})

export class AuthConfigModule {}
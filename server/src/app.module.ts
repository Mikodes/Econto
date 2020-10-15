import { Module } from '@nestjs/common';
import { AuthController } from './authentication/auth.controller';
import { AuthModule } from './authentication/auth.module';
import { AppConfigModule } from './config/app/config.module';
import { AuthConfigModule } from './config/auth/config.module';
import { PostgresConfigModule } from './config/database/postgres/config.module';
import { ShoesModule } from './models/shoes/shoes.module';
import { PostgresDatabaseProviderModule } from './providers/database/postgres/provider.module';

@Module({
    imports: [
        PostgresDatabaseProviderModule,
        ShoesModule,
        AppConfigModule,
        PostgresConfigModule,
        AuthConfigModule,
        AuthModule
    ],
    controllers: [AuthController],
    providers: [],
})

export class AppModule {}
import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { PostgresConfigModule } from './config/database/postgres/config.module';
import { ShoesModule } from './models/shoes/shoes.module';
import { PostgresDatabaseProviderModule } from './providers/database/postgres/provider.module';

@Module({
    imports: [
        PostgresDatabaseProviderModule,
        ShoesModule,
        AppConfigModule,
        PostgresConfigModule
    ],
    controllers: [],
    providers: [],
})

export class AppModule {}
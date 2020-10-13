import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { PostgresConfigModule } from './config/database/postgres/config.module';
import { ItemModule } from './models/item.module';
import { ShoesModule } from './models/shoes/shoes.module';
import { PostgresDatabaseProviderModule } from './providers/database/postgres/provider.module';

@Module({
    imports: [
        PostgresDatabaseProviderModule,
        ItemModule,
        ShoesModule,
        AppConfigModule,
        PostgresConfigModule
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {}
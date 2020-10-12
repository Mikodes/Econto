import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import configService from './config/config.service';
import { PostgresConfigService } from './config/database/postgres/config.service';
import { ItemModule } from './models/item.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        ItemModule,
        AppConfigModule,
        PostgresConfigService
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {}
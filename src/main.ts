import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configService from './config/config.service';
import './config/database/generate-orm-config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(configService.getPort());
}

bootstrap();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configService from './config/config.service';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('/api/v1');
    
    await app.listen(configService.getPort());
}

bootstrap();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configService from './config/config.service';
import generateOrmConfig from './config/database/generate-orm-config';

async function bootstrap() {
    if(configService.isNewOrmConfigRequired()) generateOrmConfig();
    
    const app = await NestFactory.create(AppModule);
    await app.listen(configService.getPort());
}

bootstrap();
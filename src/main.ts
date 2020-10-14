import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config: AppConfigService = app.get('AppConfigService');

    app.setGlobalPrefix(config.prefix);
    await app.listen(config.port);
}

bootstrap();

//TODO: Create custom exceptions and middleware to catch them;
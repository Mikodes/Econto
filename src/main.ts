import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionMiddleware } from './common/middlewares/exception.middleware';
import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config: AppConfigService = app.get(AppConfigService);
    app.setGlobalPrefix(config.prefix);

    app.useGlobalFilters(new ExceptionMiddleware());

    await app.listen(config.port);
}

bootstrap();

//TODO: Create create-user.sh 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionMiddleware } from './common/middlewares/exception.middleware';
import { ConfigValidator } from './common/utils/config-validator';
import config from './config';

async function bootstrap() {
    if(!await new ConfigValidator().validate()) return;

    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix(config.APP.PREFIX);

    app.useGlobalFilters(new ExceptionMiddleware());

    await app.listen(config.APP.PORT);
}

bootstrap();
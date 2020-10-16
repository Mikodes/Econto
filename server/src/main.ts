import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionMiddleware } from './common/middlewares/exception.middleware';
import { ConfigValidator } from './common/utils/config-validator';
import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
    if(!await new ConfigValidator().validate()) return;

    const app = await NestFactory.create(AppModule);

    const config: AppConfigService = app.get(AppConfigService);
    app.setGlobalPrefix(config.prefix);

    app.useGlobalFilters(new ExceptionMiddleware());

    await app.listen(config.port);
}

bootstrap();

//TODO: Replace old config by new one
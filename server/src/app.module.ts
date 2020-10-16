import { Module } from '@nestjs/common';
import { AuthController } from './authentication/auth.controller';
import { AuthModule } from './authentication/auth.module';
import { ShoesModule } from './models/shoes/shoes.module';
import { PostgresDatabaseProviderModule } from './providers/database/provider.module';

@Module({
    imports: [
        PostgresDatabaseProviderModule,
        ShoesModule,
        AuthModule
    ],
    controllers: [AuthController],
    providers: [],
})

export class AppModule {}
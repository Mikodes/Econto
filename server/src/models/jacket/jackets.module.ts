import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../authentication/auth.module';
import { JwtStrategy } from '../../authentication/strategies/jwt.strategy';
import { Jacket } from './entities/jacket.entity';
import { JacketsService } from './jackets.service';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([Jacket])],
    providers: [JacketsService, JwtStrategy],
    controllers: [],
    exports: []
})

export class JacketsModule {}
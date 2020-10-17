import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../authentication/auth.module';
import { JwtStrategy } from '../../authentication/strategies/jwt.strategy';
import { Shoes } from './entities/shoes.entity';
import { ShoesController } from './shoes.controller';
import { ShoesService } from './shoes.service';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([Shoes])],
    providers: [ShoesService, JwtStrategy],
    controllers: [ShoesController],
    exports: []
})

export class ShoesModule {}
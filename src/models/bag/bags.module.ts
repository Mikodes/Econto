import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../authentication/auth.module';
import { JwtStrategy } from '../../authentication/strategies/jwt.strategy';
import { Bag } from './entities/bag.entity';
import { BagsController } from './bags.controller';
import { BagsService } from './bags.service';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([Bag])],
    providers: [BagsService, JwtStrategy],
    controllers: [BagsController],
    exports: []
})

export class BagsModule {}
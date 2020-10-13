import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shoes } from './entities/shoes.entity';
import { ShoesController } from './shoes.controller';
import { ShoesService } from './shoes.service';

@Module({
    imports: [TypeOrmModule.forFeature([Shoes])],
    providers: [ShoesService],
    controllers: [ShoesController],
    exports: []
})

export class ShoesModule {}
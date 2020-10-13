import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoesController } from './shoes.controller';
import { ShoesRepository } from './shoes.repository';
import { ShoesService } from './shoes.service';

@Module({
    imports: [TypeOrmModule.forFeature([ShoesRepository])],
    providers: [ShoesService],
    controllers: [ShoesController],
    exports: [ShoesService],
})

export class ShoesModule {}
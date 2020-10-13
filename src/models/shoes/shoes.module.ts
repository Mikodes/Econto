import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoesRepository } from './shoes.repository';
import { ShoesService } from './shoes.service';

@Module({
    imports: [TypeOrmModule.forFeature([ShoesRepository])],
    providers: [ShoesService],
    exports: [ShoesService],
})

export class ShoesModule {}
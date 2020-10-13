import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateShoesDto } from './dtos/create.dto';
import { Shoes } from './entities/shoes.entity';
import { ShoesService } from './shoes.service';

@Controller('shoes')
export class ShoesController {
    constructor(private readonly _shoesService: ShoesService) { }

    @Get()
    public async getAll(): Promise<Shoes[]> {
        return await this._shoesService.getAll();
    }

    @Post()
    public async create(@Body() createShoesDto: CreateShoesDto): Promise<Shoes> {
        // return this._shoesService.create(CreateShoesDto)
    }
}
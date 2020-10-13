import { Body, Controller, Get, Post } from '@nestjs/common';
import { ShoesDto } from './dtos/shoes.dto';
import { ShoesService } from './shoes.service';

@Controller('shoes')
export class ShoesController {
    constructor(private readonly _shoesService: ShoesService) { }

    @Get()
    public async getAll(): Promise<ShoesDto[]> {
        return await this._shoesService.getAll();
    }

    @Post()
    public async create(@Body() shoesDto: ShoesDto): Promise<ShoesDto> {
        return this._shoesService.create(ShoesDto.from(shoesDto));
    }
}
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateShoesRequest } from './dtos/create.dto';
import { ShoesResponse } from './dtos/shoes.dto';
import { Shoes } from './entities/shoes.entity';
import { ShoesService } from './shoes.service';

@Controller('shoes')
export class ShoesController {
    constructor(private readonly _shoesService: ShoesService) { }

    @Get()
    public async getAll(): Promise<ShoesResponse[]> {
        const shoes: Shoes[] = await this._shoesService.getAll();
        const response: ShoesResponse[] = shoes.map(entity => ShoesResponse.fromObject(entity));

        return response;
    }

    @Post()
    public async create(@Body() body: CreateShoesRequest): Promise<ShoesResponse> {
        const entity: Shoes = ShoesResponse.fromObject(body).toEntity();
        const shoes: Shoes = await this._shoesService.create(entity);
        const response = ShoesResponse.fromObject(shoes);

        return response;
    }
}
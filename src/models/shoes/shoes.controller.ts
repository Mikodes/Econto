import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ShoesNotFoundException } from '../../common/exceptions/shoes-not-found.exception';
import { CreateShoesRequest } from './dtos/create.dto';
import { ShoesResponse } from './dtos/shoes.dto';
import { UpdateShoesRequest } from './dtos/update.dto';
import { Shoes } from './entities/shoes.entity';
import { ShoesService } from './shoes.service';

@Controller('shoes')
export class ShoesController {
    constructor(private readonly _shoesService: ShoesService) { }

    @Get('/:id')
    public async getById(@Param('id') id: string): Promise<ShoesResponse> {
        const shoes: Shoes | null = await this._shoesService.getById(id);

        if(!shoes) throw new ShoesNotFoundException();
        
        const response: ShoesResponse = ShoesResponse.fromObject(shoes);

        return response;
    }

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

    @Delete('/:id')
    public async deleteById(@Param('id') id: string): Promise<void> {
        const shoes: Shoes | null = await this._shoesService.getById(id);

        if(!shoes) throw new NotFoundException('Shoes with provided id not found');

        await this._shoesService.deleteById(id);
    }

    @Patch('/:id')
    public async updateById(@Param('id') id: string, @Body() body: UpdateShoesRequest): Promise<void> {
        const shoes: Shoes | null = await this._shoesService.getById(id);

        if(!shoes) throw new NotFoundException('Shoes with provided id not found');

        await this._shoesService.updateById(id, body);
    }
}
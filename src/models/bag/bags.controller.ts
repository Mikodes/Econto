import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ValidationPipe } from '../../common/pipes/validation.pipe';
import { BagNotFoundException } from '../../common/exceptions/bag-not-found.exception';
import { CreateBagRequest } from './dto/create.dto';
import { BagResponse } from './dto/bag.dto';
import { UpdateBagRequest } from './dto/update.dto';
import { Bag } from './entities/bag.entity';
import { BagsService } from './bags.service';
import { CreateBagSchema } from './schemas/create.schema';
import { UpdateBagSchema } from './schemas/update.schema';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('bag')
@UseGuards(JwtAuthGuard)
export class BagsController {
    constructor(private readonly _bagService: BagsService) { }

    @Get('/:id')
    public async getById(@Param('id') id: string): Promise<BagResponse> {
        const bag: Bag | null = await this._bagService.getById(id);

        if(!bag) throw new BagNotFoundException();
        
        const response: BagResponse = BagResponse.fromObject(bag);

        return response;
    }

    @Get()
    public async getAll(): Promise<BagResponse[]> {
        const bags: Bag[] = await this._bagService.getAll();
        const response: BagResponse[] = bags.map(entity => BagResponse.fromObject(entity));

        return response;
    }

    @Post()
    public async create(@Body(new ValidationPipe(CreateBagSchema)) body: CreateBagRequest): Promise<BagResponse> {
        const entity: Bag = BagResponse.fromObject(body).toEntity();
        const bag: Bag = await this._bagService.create(entity);
        const response = BagResponse.fromObject(bag);

        return response;
    }

    @Delete('/:id')
    public async deleteById(@Param('id') id: string): Promise<void> {
        const bag: Bag | null = await this._bagService.getById(id);

        if(!bag) throw new BagNotFoundException();

        await this._bagService.deleteById(id);
    }

    @Patch('/:id')
    public async updateById(@Param('id') id: string, @Body(new ValidationPipe(UpdateBagSchema)) body: UpdateBagRequest): Promise<void> {
        const bag: Bag | null = await this._bagService.getById(id);

        if(!bag) throw new BagNotFoundException();

        await this._bagService.updateById(id, body);
    }
}
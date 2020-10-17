import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ValidationPipe } from '../../common/pipes/validation.pipe';
import { JacketNotFoundException } from '../../common/exceptions/jacket-not-found.exception';
import { CreateJacketRequest } from './dto/create.dto';
import { JacketResponse } from './dto/jacket.dto';
import { UpdateJacketRequest } from './dto/update.dto';
import { Jacket } from './entities/jacket.entity';
import { JacketsService } from './jackets.service';
import { CreateJacketSchema } from './schemas/create.schema';
import { UpdateJacketSchema } from './schemas/update.schema';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('jacket')
@UseGuards(JwtAuthGuard)
export class JacketsController {
    constructor(private readonly _jacketService: JacketsService) { }

    @Get('/:id')
    public async getById(@Param('id') id: string): Promise<JacketResponse> {
        const jacket: Jacket | null = await this._jacketService.getById(id);

        if(!jacket) throw new JacketNotFoundException();
        
        const response: JacketResponse = JacketResponse.fromObject(jacket);

        return response;
    }

    @Get()
    public async getAll(): Promise<JacketResponse[]> {
        const jackets: Jacket[] = await this._jacketService.getAll();
        const response: JacketResponse[] = jackets.map(entity => JacketResponse.fromObject(entity));

        return response;
    }

    @Post()
    public async create(@Body(new ValidationPipe(CreateJacketSchema)) body: CreateJacketRequest): Promise<JacketResponse> {
        const entity: Jacket = JacketResponse.fromObject(body).toEntity();
        const jacket: Jacket = await this._jacketService.create(entity);
        const response = JacketResponse.fromObject(jacket);

        return response;
    }

    @Delete('/:id')
    public async deleteById(@Param('id') id: string): Promise<void> {
        const jacket: Jacket | null = await this._jacketService.getById(id);

        if(!jacket) throw new JacketNotFoundException();

        await this._jacketService.deleteById(id);
    }

    @Patch('/:id')
    public async updateById(@Param('id') id: string, @Body(new ValidationPipe(UpdateJacketSchema)) body: UpdateJacketRequest): Promise<void> {
        const jacket: Jacket | null = await this._jacketService.getById(id);

        if(!jacket) throw new JacketNotFoundException();

        await this._jacketService.updateById(id, body);
    }
}
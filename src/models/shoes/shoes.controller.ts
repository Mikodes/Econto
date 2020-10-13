import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, SerializeOptions, UseInterceptors } from "@nestjs/common";
import { CreateShoesDto } from "./dtos/create.dto";
import { Shoes } from "./entities/shoes.entity";
import { extendedShoesGroupsForSerializing } from "./serializers/shoes.serializer";
import { ShoesService } from "./shoes.service";

@Controller('shoes')
@SerializeOptions({ groups: extendedShoesGroupsForSerializing })
export class ShoesController {
    constructor(private readonly _shoesService: ShoesService) {}

    @Get('/:id')
    @UseInterceptors(ClassSerializerInterceptor)
    async get(@Param('id') id: string): Promise<Shoes> {
        return this._shoesService.get(id);
    }

    @Post()
    @UseInterceptors(ClassSerializerInterceptor)
    async post(@Body() dto: CreateShoesDto): Promise<Shoes> {
        return this._shoesService.create(dto);
    }
    
    //TODO: Create Post action
    //TODO: Read more about validation and pipes
    //TODO: Decide whether you need serializers or not
}
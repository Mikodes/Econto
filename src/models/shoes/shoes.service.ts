import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShoesDto } from './dtos/shoes.dto';
import { Shoes } from './entities/shoes.entity';

@Injectable()
export class ShoesService {
    constructor(@InjectRepository(Shoes) private readonly _shoesRepository: Repository<Shoes>) { }

    public async getAll(): Promise<ShoesDto[]> {
        return await this._shoesRepository.find().then(shoes => shoes.map(entity => ShoesDto.fromEntity(entity)));
    }

    public async create(shoesDto: ShoesDto): Promise<ShoesDto> {
        return this._shoesRepository.save(shoesDto.toEntity()).then(entity => ShoesDto.fromEntity(entity));
    }
}
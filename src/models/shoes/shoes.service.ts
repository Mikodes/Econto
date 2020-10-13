import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shoes } from './entities/shoes.entity';

@Injectable()
export class ShoesService {
    constructor(@InjectRepository(Shoes) private readonly _shoesRepository: Repository<Shoes>) { }

    public async getAll(): Promise<Shoes[]> {
        return await this._shoesRepository.find();
    }

    public async create(shoes: Shoes): Promise<Shoes> {
        return this._shoesRepository.save(shoes);
    }
}
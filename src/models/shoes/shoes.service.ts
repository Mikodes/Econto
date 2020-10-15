import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shoes } from './entities/shoes.entity';

@Injectable()
export class ShoesService {
    constructor(@InjectRepository(Shoes) private readonly _shoesRepository: Repository<Shoes>) { }

    public async getById(id: string): Promise<Shoes | null> {
        const shoesList: Shoes[] = await this.getAll();
        return shoesList.filter(shoe => shoe.id === id)[0];
    }

    public async getAll(): Promise<Shoes[]> {
        return await this._shoesRepository.find();
    }

    public async create(shoes: Shoes): Promise<Shoes> {
        return await this._shoesRepository.save(shoes);
    }

    public async deleteById(id: string): Promise<void> {
        await this._shoesRepository.delete({ id });
    }

    public async updateById(id: string, shoes: Partial<Shoes>): Promise<void> {
        await this._shoesRepository.update({ id }, shoes);
    }
}
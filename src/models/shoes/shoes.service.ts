import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shoes } from './entities/shoes.entity';

@Injectable()
export class ShoesService {
    constructor(@InjectRepository(Shoes) private readonly _shoesRepository: Repository<Shoes>) { }

    public async getById(id: string): Promise<Shoes | null> {
        const shoesList: Shoes[] = await this.getAll();
        const shoes: Shoes | null = shoesList.filter(shoe => shoe.id === id)[0];

        return shoes;
    }

    public async getAll(): Promise<Shoes[]> {
        return await this._shoesRepository.find();
    }

    public async create(shoes: Shoes): Promise<Shoes> {
        return this._shoesRepository.save(shoes);
    }

    public async deleteById(id: string): Promise<void> {
        this._shoesRepository.delete({ id });
    }

    public async updateById(id: string, shoes: Partial<Shoes>): Promise<void> {
        this._shoesRepository.update({ id }, shoes);
    }
}
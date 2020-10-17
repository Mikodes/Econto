import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IService } from 'src/common/interfaces/IService';
import { Repository } from 'typeorm';
import { Bag } from './entities/bag.entity';

@Injectable()
export class BagsService implements IService<Bag> {
    constructor(@InjectRepository(Bag) private readonly _bagRepository: Repository<Bag>) { }

    public async getById(id: string): Promise<Bag | null> {
        const bags: Bag[] = await this.getAll();
        return bags.filter(bag => bag.id === id)[0];
    }

    public async getAll(): Promise<Bag[]> {
        return await this._bagRepository.find();
    }

    public async create(bag: Bag): Promise<Bag> {
        return await this._bagRepository.save(bag);
    }

    public async deleteById(id: string): Promise<void> {
        await this._bagRepository.delete({ id });
    }

    public async updateById(id: string, bag: Partial<Bag>): Promise<void> {
        await this._bagRepository.update({ id }, bag);
    }
}
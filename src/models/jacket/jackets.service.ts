import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IService } from 'src/common/interfaces/IService';
import { Repository } from 'typeorm';
import { Jacket } from './entities/jacket.entity';

@Injectable()
export class JacketsService implements IService<Jacket> {
    constructor(@InjectRepository(Jacket) private readonly _jacketRepository: Repository<Jacket>) { }

    public async getById(id: string): Promise<Jacket | null> {
        const jackets: Jacket[] = await this.getAll();
        return jackets.filter(jacket => jacket.id === id)[0];
    }

    public async getAll(): Promise<Jacket[]> {
        return await this._jacketRepository.find();
    }

    public async create(jacket: Jacket): Promise<Jacket> {
        return await this._jacketRepository.save(jacket);
    }

    public async deleteById(id: string): Promise<void> {
        await this._jacketRepository.delete({ id });
    }

    public async updateById(id: string, jacket: Partial<Jacket>): Promise<void> {
        await this._jacketRepository.update({ id }, jacket);
    }
}
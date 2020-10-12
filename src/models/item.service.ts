import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { Repository } from 'typeorm';
import { ItemDTO } from './item.dto';

@Injectable()
export class ItemService {
    constructor(@InjectRepository(Item) private readonly repo: Repository<Item>) { }

    public async getAll(): Promise<ItemDTO[]> {
        return await this.repo.find().then(items => items.map(entity => ItemDTO.fromEntity(entity)));
    }

    public async create(dto: ItemDTO): Promise<ItemDTO> {
        return this.repo.save(dto.toEntity()).then(entity => ItemDTO.fromEntity(entity));
    }
}
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateShoesDto } from "./dtos/create.dto";
import { ShoesEntity } from "./serializers/shoes.serializer";
import { ShoesRepository } from "./shoes.repository";

@Injectable()
export class ShoesService {
    constructor(@InjectRepository(ShoesRepository) private readonly _shoesRepository: ShoesRepository) {}

    async get(id: string, relations: string[] = [], throwsException = false): Promise<ShoesEntity> {
        return await this._shoesRepository.get(id, relations, throwsException);
    }

    async create(inputs: CreateShoesDto): Promise<ShoesEntity> {
        return await this._shoesRepository.createEntity(inputs);
    }

    //TODO: Create update method
}
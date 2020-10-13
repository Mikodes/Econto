import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ShoesEntity } from "./serializers/shoes.serializer";
import { ShoesRepository } from "./shoes.repository";

@Injectable()
export class ShoesService {
    constructor(@InjectRepository(ShoesRepository) private readonly _shoesRepository: ShoesRepository) {}

    async get(id: string, relations: string[] = [], throwsException = false): Promise<ShoesEntity> {
        return await this._shoesRepository.get(id, relations, throwsException);
    }

    //TODO: Create DTO's directory and add shoes dtos (create, edit)
}
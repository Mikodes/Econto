import { classToPlain, plainToClass } from "class-transformer";
import { EntityRepository } from "typeorm";
import { ModelRepository } from "../model.repository";
import { Shoes } from "./entities/shoes.entity";
import { allShoesGroupsForSerializing, ShoesEntity } from "./serializers/shoes.serializer";

@EntityRepository(Shoes)
export class ShoesRepository extends ModelRepository<Shoes, ShoesEntity> {
    transform(model: Shoes): ShoesEntity {
        const transformOptions = {
            groups: allShoesGroupsForSerializing
        };

        return plainToClass(
            ShoesEntity,
            classToPlain(model, transformOptions),
            transformOptions
        );
    }

    transformMany(models: Shoes[]): ShoesEntity[] {
        return models.map(model => this.transform(model));
    }
}
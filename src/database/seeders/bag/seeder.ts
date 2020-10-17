import { Bag } from "../../../models/bag/entities/bag.entity";
import { random } from 'faker';
import { Color, Entity } from "../../../common/constants";
import { BagsService } from "../../../models/bag/bags.service";
import { BagResponse } from "../../../models/bag/dto/bag.dto";
import { red } from 'chalk';
import { BaseSeeder } from "../base.seeder";
import { RepositoryGetter } from "../../utils/repository-getter";
import { Repository } from "typeorm";

class BagSeeder extends BaseSeeder<Bag> {
    public static async generateSeed(): Promise<void> {
        const repository = await new RepositoryGetter().getRepository(Entity.JACKET);
        const service = new BagsService(repository as Repository<Bag>);

        const seeder = new BagSeeder(service);

        await seeder
            .run()
            .catch((error) => console.log(red(error.message)));  
    }

    protected createEntityFromFakeData(generatedBag: Partial<Bag>): Bag {
        const bagDto = BagResponse.fromObject(generatedBag);
        const entity = bagDto.toEntity();

        return entity;
    }

    protected generateFakeEntityData(): Partial<Bag> {
        return {
            name: random.word(),
            price: random.number(1000),
            brand: random.word(),
            color: random.objectElement(Color) as Color
        };
    }
}

BagSeeder.generateSeed();
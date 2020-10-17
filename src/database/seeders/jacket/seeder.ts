import { Jacket } from "../../../models/jacket/entities/jacket.entity";
import { random } from 'faker';
import { Color, Entity, Style } from "../../../common/constants";
import { JacketsService } from "../../../models/jacket/jackets.service";
import { JacketResponse } from "../../../models/jacket/dto/jacket.dto";
import { red } from 'chalk';
import { BaseSeeder } from "../base.seeder";
import { RepositoryGetter } from "../../utils/repository-getter";
import { Repository } from "typeorm";

class JacketSeeder extends BaseSeeder<Jacket> {
    public static async generateSeed(): Promise<void> {
        const repository = await new RepositoryGetter().getRepository(Entity.JACKET);
        const service = new JacketsService(repository as Repository<Jacket>);

        const seeder = new JacketSeeder(service);

        await seeder
            .run()
            .catch((error) => console.log(red(error.message)));  
    }

    protected createEntityFromFakeData(generatedJacket: Partial<Jacket>): Jacket {
        const jacketDto = JacketResponse.fromObject(generatedJacket);
        const entity = jacketDto.toEntity();

        return entity;
    }

    protected generateFakeEntityData(): Partial<Jacket> {
        return {
            name: random.word(),
            price: random.number(1000),
            brand: random.word(),
            style: random.objectElement(Style) as Style,
            color: random.objectElement(Color) as Color
        };
    }
}

JacketSeeder.generateSeed();
import { Shoes } from "../../../models/shoes/entities/shoes.entity";
import { random } from 'faker';
import { Color, Entity, Gender } from "../../../common/constants";
import { ShoesService } from "../../../models/shoes/shoes.service";
import { ShoesResponse } from "../../../models/shoes/dto/shoes.dto";
import { red } from 'chalk';
import { BaseSeeder } from "../base.seeder";
import { RepositoryGetter } from "../../utils/repository-getter";
import { Repository } from "typeorm";

generateSeed();

async function generateSeed(): Promise<void> {
    const repository = await new RepositoryGetter().getRepository(Entity.SHOES);
    const shoesService = new ShoesService(repository as Repository<Shoes>);

    const seeder = new ShoesSeeder(shoesService);

    await seeder
        .run()
        .catch((error) => console.log(red(error.message)));       
}

class ShoesSeeder extends BaseSeeder<Shoes> {
    public createEntityFromFakeData(generatedShoes: Partial<Shoes>): Shoes {
        const shoesDto = ShoesResponse.fromObject(generatedShoes);
        const entity = shoesDto.toEntity();

        return entity;
    }

    public generateFakeEntityData(): Partial<Shoes> {
        return {
            name: random.word(),
            price: random.number(1000),
            brand: random.word(),
            size: random.number(40),
            color: random.objectElement(Color) as Color,
            gender: random.objectElement(Gender) as Gender
        };
    }
}
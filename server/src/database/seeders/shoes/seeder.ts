import { Shoes } from "src/models/shoes/entities/shoes.entity";
import { random } from 'faker';
import { Color, Gender } from "src/common/constants";
import { ConnectionOptions, createConnection } from "typeorm";
import { getOrmConfig } from "src/database/utils/read-orm-config";
import { ShoesService } from "src/models/shoes/shoes.service";
import { ShoesResponse } from "src/models/shoes/dto/shoes.dto";
import { red } from 'chalk';
import { BaseSeeder } from "../base.seeder";

generateSeed();

async function generateSeed(): Promise<void> {
    const connectionOptions = getOrmConfig() as ConnectionOptions;
    const connection = await createConnection(connectionOptions);

    const repository = connection.getRepository(Shoes);
    const shoesService = new ShoesService(repository);

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
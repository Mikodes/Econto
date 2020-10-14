import { Shoes } from "src/models/shoes/entities/shoes.entity";
import faker from 'faker';
import { Color, Gender } from "src/common/constants";
import { createConnection } from "typeorm";
import { getOrmConfig } from "src/database/utils/read-orm-config";

async function run(): Promise<void> {
    // const connection = await createConnection();
    console.log(getOrmConfig());
}

function generateFakeShoes(): Partial<Shoes> {
    return {
        name: faker.random.word(),
        price: faker.random.number(1000),
        brand: faker.random.word(),
        size: faker.random.number(40),
        color: faker.random.objectElement(Color) as Color,
        gender: faker.random.objectElement(Gender) as Gender
    };
}
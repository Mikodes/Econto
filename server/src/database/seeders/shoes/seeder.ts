import { Shoes } from "src/models/shoes/entities/shoes.entity";
import { random } from 'faker';
import { Color, Gender } from "src/common/constants";
import { Connection, ConnectionOptions, createConnection } from "typeorm";
import { getOrmConfig } from "src/database/utils/read-orm-config";
import { ShoesService } from "src/models/shoes/shoes.service";
import { ShoesResponse } from "src/models/shoes/dto/shoes.dto";
import yargs from 'yargs';
import { red, green } from 'chalk';

run()
    .then(() => console.log(green('Seeding completed successfully')))
    .catch(error => console.log(red(error.message)));

async function run(): Promise<void> {
    const amount: number = getAmountParameter();

    const connection: Connection = await createConnection(getOrmConfig() as ConnectionOptions);
    const shoesService: ShoesService = new ShoesService(connection.getRepository(Shoes));

    for(let i = 0; i < amount; i++) {
        const dto = ShoesResponse.fromObject(generateFakeShoes());
        await shoesService.create(dto.toEntity());
    }
}

function getAmountParameter(): number {
    const args = yargs(process.env as any).argv;
    const amount: number | undefined = args.amount as number | undefined;

    if(amount === undefined) throw new Error('You need to specify the amount parameter by adding -- --amount=x to your script');
    if(typeof amount !== 'number') throw new Error('Amount parameter must be a number');
    
    return amount;
}

function generateFakeShoes(): Partial<Shoes> {
    return {
        name: random.word(),
        price: random.number(1000),
        brand: random.word(),
        size: random.number(40),
        color: random.objectElement(Color) as Color,
        gender: random.objectElement(Gender) as Gender
    };
}
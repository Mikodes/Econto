import { Shoes } from "src/models/shoes/entities/shoes.entity";
import { random } from 'faker';
import { Color, Gender } from "src/common/constants";
import { ConnectionOptions, createConnection } from "typeorm";
import { getOrmConfig } from "src/database/utils/read-orm-config";
import { ShoesService } from "src/models/shoes/shoes.service";
import { ShoesResponse } from "src/models/shoes/dto/shoes.dto";
import yargs from 'yargs';
import { red, green } from 'chalk';

generateSeed();

async function generateSeed(): Promise<void> {
    const connectionOptions = getOrmConfig() as ConnectionOptions;
    const connection = await createConnection(connectionOptions);

    const repository = connection.getRepository(Shoes);
    const shoesService = new ShoesService(repository);

    const seedGenerator = new SeedGenerator(shoesService);

    await seedGenerator
        .run()
        .catch((error) => console.log(red(error.message)));       
}

class SeedGenerator {
    public constructor(private readonly _shoesService: ShoesService) {}

    public async run(): Promise<void> {
        const amount = this.getAmountFromParameters();

        await this.createShoes(amount);

        this.printSuccessMessage();
    }

    public getAmountFromParameters(): number {
        const environmentVariables: unknown = process.env;
        const parameters = yargs(environmentVariables as string[]).argv;

        const amount = parameters.amount;

        if(amount === undefined) throw new Error('You need to specify the amount parameter by adding -- --amount=x to your script');

        if(typeof amount !== 'number') throw new Error('Amount parameter must be a number');

        return amount;
    }

    public async createShoes(amount: number): Promise<void> {
        for(let i = 0; i < amount; i++) {
            const generatedShoesData = this.generateFakeShoes();
            const entity = this.createEntityFromFakeData(generatedShoesData);

            await this.saveShoesInDatabase(entity);
        }
    }

    public printSuccessMessage(): void {
        console.log(green('Seeding completed successfully'));
    }

    public createEntityFromFakeData(generatedShoes: Partial<Shoes>): Shoes {
        const shoesDto = ShoesResponse.fromObject(generatedShoes);
        const entity = shoesDto.toEntity();

        return entity;
    }

    public generateFakeShoes(): Partial<Shoes> {
        return {
            name: random.word(),
            price: random.number(1000),
            brand: random.word(),
            size: random.number(40),
            color: random.objectElement(Color) as Color,
            gender: random.objectElement(Gender) as Gender
        };
    }

    public async saveShoesInDatabase(shoes: Shoes): Promise<void> {
        this._shoesService.create(shoes);
    }
}
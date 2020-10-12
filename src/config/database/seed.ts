import { Item } from "src/models/item.entity";
import * as _ from 'lodash';
import { ItemService } from "src/models/item.service";
import { ConnectionOptions, createConnection } from "typeorm";
import configService from "../config.service";
import { ItemDTO } from "src/models/item.dto";

async function run(): Promise<ItemDTO[]> {
    const seedId = Date.now().toString().split('').reverse().reduce((s, it, x) => (x > 3 ? s : (s += it)), '');

    const opt = {
        ...configService.getTypeOrmConfig(),
        debug: true
    };

    const connection = await createConnection(opt as ConnectionOptions);
    const itemService = new ItemService(connection.getRepository(Item));

    const work = _.range(1, 10).map(n => ItemDTO.from({
        name: `seed${seedId}-${n}`,
        description: 'Created from seed'
    })).map(dto => itemService.create(dto).then(r => (console.log('done =>', r.name), r)));

    return await Promise.all(work);
}

run()
    .then(() => console.log('Wait for script to execute...'))
    .catch(error => console.error('Seed error', error));
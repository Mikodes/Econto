import fs = require('fs');
import { ConnectionOptions } from 'typeorm';

export function getOrmConfig(): ConnectionOptions {
    const config = fs.readFileSync('ormconfig.json', { encoding: 'utf8', flag: 'r' });
    const parsedConfig = JSON.parse(config);

    return parsedConfig;
}
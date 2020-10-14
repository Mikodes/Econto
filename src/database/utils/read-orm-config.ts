import fs = require('fs');

export function getOrmConfig(): Record<string, any> {
    const config = fs.readFileSync('ormconfig.json', { encoding: 'utf8', flag: 'r' });
    const parsedConfig = JSON.parse(config);

    return parsedConfig;
}
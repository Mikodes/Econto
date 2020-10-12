import configService from '../config.service';
import fs = require('fs');

const generateOrmConfig = (): void => {
    fs.writeFileSync('ormconfig.json', JSON.stringify(configService.getTypeOrmConfig(), null, 2));
};

export default generateOrmConfig;
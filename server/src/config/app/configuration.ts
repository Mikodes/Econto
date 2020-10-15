import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    port: process.env.APP_PORT,
    mode: process.env.APP_MODE,
    prefix: process.env.APP_PREFIX
}));
import { registerAs } from '@nestjs/config';
import 'dotenv/config';

export default registerAs('app', () => ({
    port: process.env.APP_PORT,
    mode: process.env.APP_MODE,
    url: process.env.APP_URL
}));
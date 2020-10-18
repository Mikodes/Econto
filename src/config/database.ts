import { config } from 'dotenv';

config();

export default {
    NAME: process.env.POSTGRES_DATABASE_NAME  || 'main',
    HOST: process.env.POSTGRES_HOST || '127.0.0.1',
    PASSWORD: process.env.POSTGRES_PASSWORD || 'password',
    PORT: parseInt(process.env.POSTGRES_PORT || '5432'),
    USER: process.env.POSTGRES_USER || 'user',
    IS_LOCAL: process.env.POSTGRES_IS_LOCAL || 'true',
    URL: process.env.POSTGRES_URL || 'url'
}
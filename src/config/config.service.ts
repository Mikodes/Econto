import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

class ConfigService {
    constructor(private env: { [k: string]: string | undefined }) {}

    private getValue(key: string, throwOnMissing: boolean = true): string {
        const value = this.env[key];

        if(!value && throwOnMissing) {
            throw new Error(`Config erorr - missing env.${key}`);
        }

        return value;
    }

    public ensureValues(keys: string[]): ConfigService {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }

    public getPort(): string {
        return this.getValue('PORT');
    }

    public isProduction(): boolean {
        const mode = this.getValue('MODE', false);
        return mode !== 'DEV';
    }

    public isNewOrmConfigRequired(): boolean {
        const generateNewConfig = this.getValue('GENERATE_ORM_CONFIG', false);
        return generateNewConfig === 'true';
    }

    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            ssl: this.isProduction(),

            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USER'),
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE'),

            entities: ['**/*.entity{.ts,.js}'],
            migrationsTableName: 'migrations',
            migrations: ['src/database/migrations/*.ts'],

            cli: {
                migrationsDir: 'src/database/migrations'
            }
        };
    }
}

const configService = new ConfigService(process.env)
    .ensureValues([
        'POSTGRES_HOST',
        'POSTGRES_PORT',
        'POSTGRES_USER',
        'POSTGRES_PASSWORD',
        'POSTGRES_DATABASE'
    ]);

export default configService;
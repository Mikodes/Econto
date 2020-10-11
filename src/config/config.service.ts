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
}
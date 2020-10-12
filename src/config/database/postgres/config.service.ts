import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class PostgresConfigService {
    constructor(private readonly _configService: ConfigService) {}

    get host(): string {
        return this._configService.get<string>('postgres.host');
    }

    get port(): number {
        return Number(this._configService.get<number>('postgres.port'));
    }

    get user(): string {
        return this._configService.get<string>('postgres.user');
    }

    get password(): string {
        return this._configService.get<string>('postgres.password');
    }

    get databaseName(): string {
        return this._configService.get<string>('postgres.databaseName');
    }
}
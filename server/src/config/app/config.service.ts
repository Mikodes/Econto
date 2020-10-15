import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfigService {
    constructor(private readonly _configService: ConfigService) {}
    
    get port(): number {
        return Number(this._configService.get<number>('app.port'));
    }

    get mode(): string {
        return this._configService.get<string>('app.mode');
    }

    get prefix(): string {
        return this._configService.get<string>('app.prefix');
    }
}
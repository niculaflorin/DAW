import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:5000';
    }

    getAPIUrl() {
        return this.apiUrl;
    }
}

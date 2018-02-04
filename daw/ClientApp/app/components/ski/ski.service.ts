import { Injectable } from '@angular/core';
import { BaseService } from '../services/base-service';
import { Observable, Subject } from 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Ski } from './ski';
import { UserService } from '../services/user-service.service';
import { ConfigService } from '../services/config-service';

@Injectable()
export class SkiService extends BaseService {

    skiList: Ski[];
    baseUrl: string;
    isLogged: boolean;

    constructor(private http: Http, private configService: ConfigService, private userService: UserService) {
        super();
        this.baseUrl = configService.getAPIUrl();
        this.isLogged = userService.isLoggedIn();
    }

    public getSkis() {
        return this.http.get(this.baseUrl + "/api/Ski").toPromise();
    }

    public getSki(id: number) {
        return this.http.get(this.baseUrl + "/api/Ski/" + id).toPromise();
    }

    public addNewSki(_ski: Ski) {
        return this.http.post(this.baseUrl + "/api/Ski", _ski).toPromise();
    }

    public updateSki(_ski: Ski) {
        return this.http.put(this.baseUrl + "/api/Ski/" + _ski.id, _ski).toPromise();
    }

    public deleteSki(id: number) {
        return this.http.delete(this.baseUrl + "/api/Ski/" + id).toPromise();
    }
    public getIsLoggedIn() {
        return this.isLogged
    }
}

import { Injectable } from '@angular/core';
import { BaseService } from '../services/base-service';
import { Observable, Subject } from 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { SkiPole } from './skiPole';
import { UserService } from '../services/user-service.service';
import { ConfigService } from '../services/config-service';

@Injectable()
export class SkiPoleService extends BaseService {

    skiList: SkiPole[];
    baseUrl: string;
    isLogged: boolean;

    constructor(private http: Http, private configService: ConfigService, private userService: UserService) {
        super();
        this.baseUrl = configService.getAPIUrl();
        this.isLogged = userService.isLoggedIn();
    }

    public getSkiPoles() {
        return this.http.get(this.baseUrl + "/api/SkiPole").toPromise();
    }

    public getSkiPole(id: number) {
        return this.http.get(this.baseUrl + "/api/SkiPole/" + id).toPromise();
    }

    public addNewSkiPole(_skiPole: SkiPole) {
        return this.http.post(this.baseUrl + "/api/SkiPole", _skiPole).toPromise();
    }

    public updateSkiPole(_skiPole: SkiPole) {
        return this.http.put(this.baseUrl + "/api/SkiPole/" + _skiPole.id, _skiPole).toPromise();
    }

    public deleteSkiPole(id: number) {
        return this.http.delete(this.baseUrl + "/api/SkiPole/" + id).toPromise();
    }
    public getIsLoggedIn() {
        return this.isLogged
    }
}

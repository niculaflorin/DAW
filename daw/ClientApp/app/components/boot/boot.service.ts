import { Injectable } from '@angular/core';
import { BaseService } from '../services/base-service';
import { Observable, Subject } from 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Boot } from './boot';
import { UserService } from '../services/user-service.service';
import { ConfigService } from '../services/config-service';

@Injectable()
export class BootService extends BaseService {

    bootList: Boot[];
    baseUrl: string;
    isLogged: boolean;

    constructor(private http: Http, private configService: ConfigService, private userService: UserService) {
        super();
        this.baseUrl = configService.getAPIUrl();
        this.isLogged = userService.isLoggedIn();
    }

    public getBoots() {
        return this.http.get(this.baseUrl + "/api/Boot").toPromise();
    }

    public getBoot(id: number) {
        return this.http.get(this.baseUrl + "/api/Boot/" + id).toPromise();
    }

    public addNewBoot(_boot: Boot) {
        return this.http.post(this.baseUrl + "/api/Boot", _boot).toPromise();
    }

    public updateBoot(_boot: Boot) {
        return this.http.put(this.baseUrl + "/api/Boot/" + _boot.id, _boot).toPromise();
    }

    public deleteBoot(id: number) {
        return this.http.delete(this.baseUrl + "/api/Boot/" + id).toPromise();
    }
    public getIsLoggedIn() {
        return this.isLogged
    }
}

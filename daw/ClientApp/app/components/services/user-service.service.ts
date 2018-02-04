import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from '../user';
import { ConfigService } from './config-service';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { BaseService } from './base-service';

@Injectable()
export class UserService extends BaseService {
    baseUrl: string = '';

    // Observable navItem source
    private authNavStatusSource = new BehaviorSubject<boolean>(false);
    // Observable navItem stream
    authNavStatus$ = this.authNavStatusSource.asObservable();

    private loggedIn = false;

    constructor(private http: Http, private configService: ConfigService) {
        super();
        if (typeof window !== 'undefined') {
            this.loggedIn = !!localStorage.getItem('auth_token');
        }
        this.authNavStatusSource.next(this.loggedIn);
        this.baseUrl = configService.getAPIUrl();
    }

    register(email: string, password: string): Observable<User> {
        let body = JSON.stringify({ email, password});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl + "/api/Accounts/Register", body, options)
            .map(res => true)
            .catch(this.handleError);
    }

    login(email: string, password: string) {
        let body = JSON.stringify({ email, password });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(
            this.baseUrl + '/api/Accounts/Login', body , options)
            .map(res => {
                if (typeof window !== 'undefined') {
                    localStorage.setItem('auth_token', JSON.stringify(res));
                }
                this.loggedIn = true;
                this.authNavStatusSource.next(true);
                return true;
            })
            .catch(this.handleError);
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this.authNavStatusSource.next(false);
    }

    isLoggedIn() {
        return this.loggedIn;
    }  




}

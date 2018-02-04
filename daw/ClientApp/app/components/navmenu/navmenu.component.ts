import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../services/user-service.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit {
    subscription: Subscription;
    isLoggedIn: boolean;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.subscription = this.userService.authNavStatus$.subscribe(status => this.isLoggedIn = status);
    }

    logout() {
        this.userService.logout();
    }
}

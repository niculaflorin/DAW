import { Subject, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Event } from '@angular/router';

import { Ski } from './Ski';
import { SkiService } from './ski.service';

@Component({
    selector: 'ski',
    templateUrl: './ski.component.html'
})
export class SkiComponent implements OnInit {
    listSki: any = [];
    filtredSki: any = [];
    skiName: string = "";
    isLogged: boolean;
    dtTrigger = new Subject();

    constructor(private skiService: SkiService) {
        this.isLogged = skiService.getIsLoggedIn();
        this.skiService.getSkis().then(response => {
            this.listSki = response.json() as Ski[];
            this.filtredSki = this.listSki.slice(0);
            this.dtTrigger.next();
        });
    }
    
    public deleteSki(id: number) {
        this.skiService.deleteSki(id).then(response => {
            this.filtredSki = this.filtredSki.filter((item: Ski) => {
                return (item.id != id)
            })
        });
    }

    ngOnInit() { }
    
}

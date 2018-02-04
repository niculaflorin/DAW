import { Subject, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Event } from '@angular/router';

import { SkiPole } from './skiPole';
import { SkiPoleService } from './skiPole.service';

@Component({
    selector: 'skiPole',
    templateUrl: './skiPole.component.html'
})
export class SkiPoleComponent implements OnInit {
    listSkiPole: any = [];
    filtredSkiPole: any = [];
    skiPoleName: string = "";
    isLogged: boolean;
    dtTrigger = new Subject();

    constructor(private skiPoleService: SkiPoleService) {
        this.isLogged = skiPoleService.getIsLoggedIn();
        this.skiPoleService.getSkiPoles().then(response => {
            this.listSkiPole = response.json() as SkiPole[];
            this.filtredSkiPole = this.listSkiPole.slice(0);
            this.dtTrigger.next();
        });
    }
    
    public deleteSkiPole(id: number) {
        this.skiPoleService.deleteSkiPole(id).then(response => {
            this.filtredSkiPole = this.filtredSkiPole.filter((item: SkiPole) => {
                return (item.id != id)
            })
        });
    }

    ngOnInit() { }
    
}

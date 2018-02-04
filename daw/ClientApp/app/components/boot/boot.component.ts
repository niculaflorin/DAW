import { Subject, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Event } from '@angular/router';

import { Boot } from './boot';
import { BootService } from './boot.service';

@Component({
    selector: 'boot',
    templateUrl: './boot.component.html'
})
export class BootComponent implements OnInit {
    listBoot: any = [];
    filtredBoot: any = [];
    BootName: string = "";
    isLogged: boolean;
    dtTrigger = new Subject();

    constructor(private bootService: BootService) {
        this.isLogged = bootService.getIsLoggedIn();
        this.bootService.getBoots().then(response => {
            this.listBoot = response.json() as Boot[];
            this.filtredBoot = this.listBoot.slice(0);
            this.dtTrigger.next();
        });
    }
    
    public deleteBoot(id: number) {
        this.bootService.deleteBoot(id).then(response => {
            this.filtredBoot = this.filtredBoot.filter((item: Boot) => {
                return (item.id != id)
            })
        });
    }

    ngOnInit() { }
    
}

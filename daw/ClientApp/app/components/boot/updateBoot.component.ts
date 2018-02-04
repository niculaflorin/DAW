import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Boot } from './boot';
import { BootService } from './boot.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'updateBoot',
    templateUrl: './updateBoot.component.html'
})
export class UpdateBootComponent implements OnInit {

    complexForm: FormGroup;

    constructor(fb: FormBuilder, private bootService: BootService, private route: ActivatedRoute, private router: Router) {
        this.route.params.subscribe(params => {
            let id = +params['id'];
            this.bootService.getBoot(id).then(res => {
                let boot = res.json() as Boot;
                this.complexForm = fb.group({
                    'id': [boot.id, Validators.required],
                    'brand': [boot.brand, Validators.required],
                    'model': [boot.model, Validators.required],
                    'size': [boot.size, Validators.required],
                    'inStockNum': [boot.inStockNum, Validators.required]
                });
            });
        });

        
    }

    public updateBoot(model: Boot) {
        console.log(model);
        this.bootService.updateBoot(model);
        this.router.navigate(['/boot']);
    }
    ngOnInit() { }
}

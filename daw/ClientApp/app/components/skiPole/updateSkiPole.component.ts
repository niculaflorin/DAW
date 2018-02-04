import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SkiPole } from './skiPole';
import { SkiPoleService } from './skiPole.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'updateSkiPole',
    templateUrl: './updateSkiPole.component.html'
})
export class UpdateSkiPoleComponent implements OnInit {

    complexForm: FormGroup;

    constructor(fb: FormBuilder, private skiPoleService: SkiPoleService, private route: ActivatedRoute, private router: Router) {
        this.route.params.subscribe(params => {
            let id = +params['id'];
            this.skiPoleService.getSkiPole(id).then(res => {
                let skiPole = res.json() as SkiPole;
                this.complexForm = fb.group({
                    'id': [skiPole.id, Validators.required],
                    'brand': [skiPole.brand, Validators.required],
                    'model': [skiPole.model, Validators.required],
                    'size': [skiPole.size, Validators.required],
                    'inStockNum': [skiPole.inStockNum, Validators.required]
                });
            });
        });

        
    }

    public updateSkiPole(model: SkiPole) {
        console.log(model);
        this.skiPoleService.updateSkiPole(model);
        this.router.navigate(['/skiPole']);
    }
    ngOnInit() { }
}

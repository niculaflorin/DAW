import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Ski } from '../ski/ski';
import { SkiService } from '../ski/ski.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'updateSki',
    templateUrl: './updateSki.component.html'
})
export class UpdateSkiComponent implements OnInit {

    complexForm: FormGroup;

    constructor(fb: FormBuilder, private skiService: SkiService, private route: ActivatedRoute, private router: Router) {
        this.route.params.subscribe(params => {
            let id = +params['id'];
            this.skiService.getSki(id).then(res => {
                let ski = res.json() as Ski;
                this.complexForm = fb.group({
                    'id': [ski.id, Validators.required],
                    'brand': [ski.brand, Validators.required],
                    'model': [ski.model, Validators.required],
                    'size': [ski.size, Validators.required],
                    'inStockNum': [ski.inStockNum, Validators.required]
                });
            });
        });

        
    }

    public updateSki(model: Ski) {
        console.log(model);
        this.skiService.updateSki(model);
        this.router.navigate(['/ski']);
    }
    ngOnInit() { }
}

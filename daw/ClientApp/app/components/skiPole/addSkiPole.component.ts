import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SkiPole } from './skiPole';
import { SkiPoleService } from './skiPole.service';
import { Router } from '@angular/router';
@Component({
    selector: 'addSkiPole',
    templateUrl: './addSkiPole.component.html'
})
export class AddSkiPoleComponent implements OnInit {

    complexForm: FormGroup;

    constructor(fb: FormBuilder, private skiPoleService: SkiPoleService, private router: Router) {
        this.complexForm = fb.group({
            'brand': [null, Validators.required],
            'model': [null, Validators.required],
            'size': [null, Validators.required],
            'inStockNum': [null, Validators.required]
        });
    }

    public newSkiPole(model: SkiPole) {
        console.log(model);
        this.skiPoleService.addNewSkiPole(model);
        this.router.navigate(['/skiPole']);
    }
    ngOnInit() { }
}

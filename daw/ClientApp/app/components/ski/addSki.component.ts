import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Ski } from './ski';
import { SkiService } from './ski.service';
import { Router } from '@angular/router';
@Component({
    selector: 'addSki',
    templateUrl: './addSki.component.html'
})
export class AddSkiComponent implements OnInit {

    complexForm: FormGroup;

    constructor(fb: FormBuilder, private skiService: SkiService, private router: Router) {
        this.complexForm = fb.group({
            'brand': [null, Validators.required],
            'model': [null, Validators.required],
            'size': [null, Validators.required],
            'inStockNum': [null, Validators.required]
        });
    }

    public newSki(model: Ski) {
        console.log(model);
        this.skiService.addNewSki(model);
        this.router.navigate(['/ski']);
    }
    ngOnInit() { }
}

import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Boot } from './boot';
import { BootService } from './boot.service';
import { Router} from '@angular/router';
@Component({
    selector: 'addBoot',
    templateUrl: './addBoot.component.html'
})
export class AddBootComponent implements OnInit {

    complexForm: FormGroup;

    constructor(fb: FormBuilder, private bootService: BootService, private router: Router) {
        this.complexForm = fb.group({
            'brand': [null, Validators.required],
            'model': [null, Validators.required],
            'size': [null, Validators.required],
            'inStockNum': [null, Validators.required]
        });
    }

    public newBoot(model: Boot) {
        console.log(model);
        this.bootService.addNewBoot(model);
        this.router.navigate(['/boot']);
    }
    ngOnInit() { }
}

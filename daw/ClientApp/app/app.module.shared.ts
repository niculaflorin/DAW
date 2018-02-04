import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SkiComponent } from './components/ski/ski.component';
import { AddSkiComponent } from './components/ski/addSki.component';
import { UpdateSkiComponent } from './components/ski/updateSki.component';
import { SkiPoleComponent } from './components/skiPole/skiPole.component';
import { AddSkiPoleComponent } from './components/skiPole/addSkiPole.component';
import { UpdateSkiPoleComponent } from './components/skiPole/updateSkiPole.component';
import { BootComponent } from './components/boot/boot.component';
import { AddBootComponent } from './components/boot/addBoot.component';
import { UpdateBootComponent } from './components/boot/updateBoot.component';



import { UserService } from './components/services/user-service.service';
import { ConfigService } from './components/services/config-service';
import { SkiService } from './components/ski/ski.service';
import { SkiPoleService } from './components/skiPole/skiPole.service';
import { BootService } from './components/boot/boot.service';



@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        SkiComponent,
        AddSkiComponent,
        UpdateSkiComponent,
        SkiPoleComponent,
        AddSkiPoleComponent,
        UpdateSkiPoleComponent,
        BootComponent,
        AddBootComponent,
        UpdateBootComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'ski', component: SkiComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'addSki', component: AddSkiComponent },
            { path: 'updateSki/:id', component: UpdateSkiComponent },
            { path: 'skiPole', component: SkiPoleComponent },
            { path: 'addSkiPole', component: AddSkiPoleComponent },
            { path: 'updateSkiPole/:id', component: UpdateSkiPoleComponent },
            { path: 'boot', component: BootComponent },
            { path: 'addBoot', component: AddBootComponent },
            { path: 'updateBoot/:id', component: UpdateBootComponent },
            

            { path: '**', redirectTo: 'home' }
        ])      
    ],
    providers: [UserService, ConfigService, SkiService, SkiPoleService, BootService]
})
export class AppModuleShared {
}

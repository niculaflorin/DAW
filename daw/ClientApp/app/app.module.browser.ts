import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';
import { UserService } from './components/services/user-service.service';
import { ConfigService } from './components/services/config-service';
import { SkiService } from './components/ski/ski.service';
import { SkiPoleService } from './components/skiPole/skiPole.service';
import { BootService } from './components/boot/boot.service';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        AppModuleShared
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }, UserService, ConfigService, SkiService, SkiPoleService, BootService
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

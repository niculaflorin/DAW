import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
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
        ServerModule,
        AppModuleShared
    ],
    providers: [UserService, ConfigService, SkiService, SkiPoleService, BootService]
})
export class AppModule {
}

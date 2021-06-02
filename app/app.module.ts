import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';

import { Phone } from './core/phone/phone.service';

import { FormsModule } from '@angular/forms';
import { PhoneListComponent } from './phone-list/phone-list.component';

import { routeParamsProvider } from './ajs-upgraded-providers';

import { PhoneDetailComponent } from './phone-detail/phone-detail.component';

import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';

@NgModule({
    imports: [ 
        BrowserModule,
        UpgradeModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        Phone,
        routeParamsProvider
    ],
    declarations: [
        PhoneListComponent,
        PhoneDetailComponent,
        CheckmarkPipe
    ],
    entryComponents: [
        PhoneListComponent,
        PhoneDetailComponent
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, ['phonecatApp'], { strictDi: true });
    }
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AutocompleteDirective} from "./autocomplete.directive";
import {GeoService} from "./geo.service";

@NgModule({
    declarations: [
        AppComponent,
        AutocompleteDirective
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [GeoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

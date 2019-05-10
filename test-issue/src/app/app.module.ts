import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AutocompleteDirective} from "./autocomplete.directive";
import {GeoService} from "./geo.service";

@NgModule({
    declarations: [
        AppComponent,
        AutocompleteDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [GeoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

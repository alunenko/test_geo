import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AutocompleteDirective} from "./autocomplete.directive";
import {GeoService} from "./geo.service";
import { AutocompliteResultComponent } from './autocomplite-result/autocomplite-result.component';
import {AutocompliteResultService} from "./autocomplite-result/autocomplite-result.service";

@NgModule({
    declarations: [
        AppComponent,
        AutocompleteDirective,
        AutocompliteResultComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        GeoService,
        AutocompliteResultService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

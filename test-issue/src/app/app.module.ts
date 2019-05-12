import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AutocompleteDirective} from "./components/autocomplete/autocomplete.directive";
import {GeoService} from "./services/geo.service";
import { AutocompleteResultComponent } from './components/autocomplete-result/autocomplete-result.component';
import {AutocompleteResultService} from "./components/autocomplete-result/autocomplete-result.service";
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

@NgModule({
    declarations: [
        AppComponent,
        AutocompleteDirective,
        AutocompleteResultComponent,
        AutocompleteComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        GeoService,
        AutocompleteResultService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

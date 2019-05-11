import {
    Component,
    ViewEncapsulation
} from '@angular/core';

import {GeoService} from "../../services/geo.service";
import {AutocompleteResultService} from "../autocomplete-result/autocomplete-result.service";

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AutocompleteComponent {

    autocompliteValue = "";

    constructor(
        private geoService: GeoService,
        private autocompliteResultService: AutocompleteResultService
    ) {
        this.geoService.newSelected.subscribe(
            (newValue) => {
                this.autocompliteValue = newValue;
            }
        )
    }

    onFocus() {
        let isGeonamesResult = this.geoService.getResults();

        if (isGeonamesResult) {
            this.autocompliteResultService.showDisplayResults();
        }
    }
}

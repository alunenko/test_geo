import {
    Component,
    ElementRef,
    HostListener,
    OnInit
} from '@angular/core';

import {GeoService} from "../../services/geo.service";
import {AutocompleteResultService} from "./autocomplete-result.service";

@Component({
    selector: 'app-autocomplete-result',
    templateUrl: './autocomplete-result.component.html',
    styleUrls: ['./autocomplete-result.component.scss']
})
export class AutocompleteResultComponent implements OnInit {
    searchResult: any;
    showSearchResult = false;
    noResultText = "";

    constructor(
        private elementReference: ElementRef,
        private geoService: GeoService,
        private autocompliteResultService: AutocompleteResultService
    ) {
        this.geoService.newResults.subscribe(
            (responseGetGeolocation) => {
                this.searchResult = responseGetGeolocation;

                if (responseGetGeolocation.geonames.length === 0) {
                    this.showSearchResult = false;
                    this.noResultText = "There is no results...";
                } else {
                    this.showSearchResult = true;
                    this.noResultText = "";
                }
            }
        );

        this.autocompliteResultService.displayResultsEvent.subscribe(
            (isSerachResult) => {
                this.showSearchResult = isSerachResult;
            }
        );
    }

    ngOnInit() {
    }

    @HostListener(
        'document:click',
        ['$event']
    ) close(event) {
        if (this.elementReference.nativeElement.contains(event.target)) {
            /* clicked inside */
            this.geoService.saveSelected(event.target.firstElementChild.innerText);
            this.showSearchResult = false;
        } else {
            /* clicked outside */
            let isInputAutocompleteElement = event.target.classList.contains("autocomplete-search");

            if (!isInputAutocompleteElement) {
                this.showSearchResult = false;
            }
        }
    }
}

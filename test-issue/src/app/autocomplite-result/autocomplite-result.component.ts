import {
    Component, ElementRef, HostListener,
    OnInit
} from '@angular/core';

import {GeoService} from "../geo.service";
import {AutocompliteResultService} from "./autocomplite-result.service";

@Component({
    selector: 'app-autocomplite-result',
    templateUrl: './autocomplite-result.component.html',
    styleUrls: ['./autocomplite-result.component.scss']
})
export class AutocompliteResultComponent implements OnInit {
    searchResult: any;
    showSearchResult = false;
    noResultText = "";

    constructor(
        private elementReference: ElementRef,
        private geoService: GeoService,
        private autocompliteResultService: AutocompliteResultService
    ) {
        this.geoService.newResults.subscribe(
            (responseGetGeolocation) => {
                this.searchResult = responseGetGeolocation;

                if(responseGetGeolocation.geonames.length === 0) {
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
        if(this.elementReference.nativeElement.contains(event.target)) {
            /* clicked inside */
            this.geoService.saveSelected(event.target.firstElementChild.innerText);
            this.showSearchResult = false;
        } else {
            /* clicked outside */
            if(!event.target.classList.contains("autocomplete-search")) {
                this.showSearchResult = false;
            }
        }
    }
}

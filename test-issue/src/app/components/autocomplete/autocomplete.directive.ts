import {
    Directive,
    ElementRef,
    HostListener
} from "@angular/core";

import {GeoService} from "../../services/geo.service";

@Directive({
    selector: "[autocomplete]"
})
export class AutocompleteDirective {
    private minLengthForSearch = 3;
    private previousText: string;
    private requestQueue = false;

    constructor(
        private elementReference: ElementRef,
        private geoService: GeoService) {
    }

    @HostListener(
        'document:keyup',
        ['$event']
    ) keyEvent(event: KeyboardEvent) {
        let element = this.elementReference.nativeElement;
        let currentValue = element.value.trim();
        let isElementLength = currentValue.length >= this.minLengthForSearch;
        let isRequestTextChanged = currentValue !== this.previousText;

        setTimeout(
            /* a small delay while user typing */
            () => {
                this.requestQueue = true;
            },
            400
        );

        if(isElementLength && isRequestTextChanged && this.requestQueue) {
            this.requestQueue = false;
            this.previousText = currentValue;
            this.geoService.getGeolocation(element.value.trim()).subscribe(
                (responseGetGeolocation) => {
                    this.geoService.saveSearchResults(responseGetGeolocation);
                },
                (errorGetGeolocation) => {
                    console.error("errorGetGeolocation", errorGetGeolocation);
                }
            );
        }
    }
}

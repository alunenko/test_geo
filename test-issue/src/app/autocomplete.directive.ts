import {
    Directive,
    ElementRef,
    HostListener
} from "@angular/core";
import {GeoService} from "./geo.service";

@Directive({
    selector: "[autocomplete]"
})
export class AutocompleteDirective {
    minLengthForSearch = 3;
    previousText: string;

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

        if(isElementLength && isRequestTextChanged) {
            /* provide element.value for service */
            this.previousText = currentValue;
            this.geoService.getGeolocation(element.value.trim());
        }
    }
}

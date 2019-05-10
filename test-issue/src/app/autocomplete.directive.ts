import {
    Directive,
    ElementRef,
    HostListener
} from "@angular/core";

@Directive({
    selector: "[autocomplete]"
})
export class AutocompleteDirective {
    minLengthForSearch = 3;

    constructor(private elementReference: ElementRef) {
    }

    @HostListener(
        'document:keyup',
        ['$event']
    ) keyEvent(event: KeyboardEvent) {
        let element = this.elementReference.nativeElement;

        if(element.value.length >= this.minLengthForSearch) {
            /* provide element.value for service */
        }
    }
}

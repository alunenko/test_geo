import {
    Component, ElementRef, Renderer2,
    ViewEncapsulation
} from '@angular/core';

import {GeoService} from "../../services/geo.service";
import {AutocompleteResultService} from "../autocomplete-result/autocomplete-result.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('toggleSearchBar', [
            state('open', style({
                animation: 'autocompleteBounce .4s',
                width: 'calc(100% + 50px)',
                right: '-60px'
            })),
            state('closed', style({
                animation: 'autocompleteBounce .4s',
                width: '50px',
                right: '0'
            })),
            transition('open => closed', [
                animate('.4s')
            ]),
            transition('closed => open', [
                animate('.4s')
            ]),
        ])
    ]
})
export class AutocompleteComponent {
    autocompleteValue = "";
    isSearchBarOpen = false;
    isOpen = false;

    constructor(
        private geoService: GeoService,
        private autocompleteResultService: AutocompleteResultService,
        private elementReference: ElementRef,
        private renderer2: Renderer2
    ) {
        this.geoService.newSelected.subscribe(
            (newValue) => {
                this.autocompleteValue = newValue;
            }
        )
    }

    onFocus() {
        let isGeonamesResult = this.geoService.getResults();

        if (isGeonamesResult) {
            this.autocompleteResultService.showDisplayResults();
        }
    }

    onOpen() {
        const className = "d-none";
        const inputElement = this.elementReference.nativeElement.querySelector("input");
        const isInput = inputElement.classList.contains(className);
        const isCloseButtonElement = this.elementReference.nativeElement.querySelector("#close");

        this.isOpen = true;
        this.isSearchBarOpen = true;

        if(isInput) {
            this.renderer2.removeClass(inputElement, className);
            inputElement.focus();
            this.renderer2.removeClass(isCloseButtonElement, "hide");
            this.renderer2.addClass(isCloseButtonElement, "show");
        }
    }

    onClose() {
        const className = "d-none";
        const inputElement = this.elementReference.nativeElement.querySelector("input");
        const isInput = inputElement.classList.contains(className);
        const isCloseButtonElement = this.elementReference.nativeElement.querySelector("#close");

        this.isOpen = false;
        this.isSearchBarOpen = false;
        this.autocompleteResultService.hideDisplayResults();

        if(!isInput) {
            this.renderer2.addClass(inputElement, className);
            this.renderer2.addClass(isCloseButtonElement, "hide");
            this.renderer2.removeClass(isCloseButtonElement, "show");
        }
    }
}

import {EventEmitter} from "@angular/core";

export class AutocompliteResultService {
    private displayResults = false;

    displayResultsEvent = new EventEmitter();

    showDisplayResults() {
        this.displayResults = true;
        this.displayResultsEvent.emit(this.displayResults);
    }

    hideDisplayResults() {
        this.displayResults = false;
        this.displayResultsEvent.emit(this.displayResults);
    }
}

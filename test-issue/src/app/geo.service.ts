import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GeoService {
    private apiUrl = "http://api.geonames.org/searchJSON";
    private userName = "vicarius";
    private results: any;
    private selected: any;

    newResults = new EventEmitter();
    newSelected = new EventEmitter();

    constructor(private httpClient: HttpClient) {}

    getGeolocation(searchText: string) {
        const url = `${this.apiUrl}?q=${searchText}&maxRows=10&username=${this.userName}`;

        return this.httpClient.get(url); /* FIXME: use pipe from rxjs. catchError */
    }

    saveSearchResults(response: any) {
        this.results = response;
        this.newResults.emit(response);
    }

    saveSelected(city: string) {
        this.selected = city;
        this.newSelected.emit(city);
    }

    getResults() {
        return this.results;
    }
}

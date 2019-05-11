import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GeoService {
    private apiUrl = "http://api.geonames.org/searchJSON";
    private userName = "vicarius";
    private results: any;

    constructor(private httpClient: HttpClient) {}

    getGeolocation(searchText: string) {
        let url = "";

        url = `${this.apiUrl}?q=${searchText}&maxRows=10&username=${this.userName}`;
        console.log(url);

        return this.httpClient.get(url);
    }

    searchResults(response: any) {
        this.results = response;
        console.log("search result is ", this.results);
    }
}

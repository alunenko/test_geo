import {
  Component,
  ViewEncapsulation
} from '@angular/core';

import {GeoService} from "./geo.service";
import {AutocompliteResultService} from "./autocomplite-result/autocomplite-result.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = "test-issue";
  autocompliteValue = "";

  constructor(
      private geoService: GeoService,
      private autocompliteResultService: AutocompliteResultService
  ) {
    this.geoService.newSelected.subscribe(
        (newValue) => {
          this.autocompliteValue = newValue;
        }
    )
  }

  onFocus() {
    let isGeonamesResult = this.geoService.getResults();

    if(isGeonamesResult) {
      this.autocompliteResultService.showDisplayResults();
    }
  }
}

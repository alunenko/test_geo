(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to {{ title }}!</h1>\n\n<app-autocomplete></app-autocomplete>\n\n<div class=\"notes\">\n    <h2>Notes</h2>\n    <hr>\n    <ol>\n        <li><i>Open search bar by click on 'S' icon, and close by 'x' button</i></li>\n        <li><i>Search-bar send a request when word contain 3+ character</i></li>\n        <li><i>Search-bar submit the request after pause in 400ms</i></li>\n        <li><i>Search has limit up to 10 results</i></li>\n        <li><i>When you'll see the search result, you can click on any item. Item where you are click, will be pasted into search field as result</i>\n            <ol>\n                <li><i>If you are misspeled while do a click from the first results, you can click on input field again, and the previous results are shown</i></li>\n                <li><i>But if you want the new search with that value in input field, just press an any key, and the new request will be sumbitted</i></li>\n            </ol>\n        </li>\n    </ol>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --color1: #2e2f44;\n  --color2: transparent;\n  --color3: #1caaa5;\n  --color4: #3f3f55;\n  --color5: #8c8ca8;\n  --backgroundColor-homePage: var(--color1);\n  --color-homePage: var(--color3);\n  --hr-homePage: var(--color4);\n  --color-h2-homePage: var(--color3);\n  --color-text-homePage: var(--color5);\n  --borderColor-autocomplite: var(--color2);\n  --color-autocomplite: var(--color5);\n  --backgroundColor-autocomplite: var(--color4);\n  --color-autocompliteSearchIcon: var(--color3);\n  --color-autocompliteCloseIcon: var(--color3);\n  --backgroundColor-content: var(--color4); }\n\nbody {\n  background-color: var(--backgroundColor-homePage);\n  overflow: hidden; }\n\n.d-none {\n  display: none; }\n\nul {\n  margin: 0;\n  padding: 0; }\n\nul li {\n    list-style: none; }\n\nh1 {\n  text-align: center;\n  color: var(--color-homePage); }\n\np {\n  margin: 0; }\n\n.notes h2 {\n  color: var(--color-h2-homePage); }\n\n.notes hr {\n  border-color: var(--hr-homePage); }\n\n.notes li {\n  color: var(--color-text-homePage); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbmkvcHJvamVjdHMvcHJpdmF0ZS90ZXN0X2dlby90ZXN0LWlzc3VlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQVM7RUFDVCxxQkFBUztFQUNULGlCQUFTO0VBQ1QsaUJBQVM7RUFDVCxpQkFBUztFQUVULHlDQUEyQjtFQUMzQiwrQkFBaUI7RUFDakIsNEJBQWM7RUFDZCxrQ0FBb0I7RUFDcEIsb0NBQXNCO0VBRXRCLHlDQUEyQjtFQUMzQixtQ0FBcUI7RUFDckIsNkNBQStCO0VBRS9CLDZDQUErQjtFQUMvQiw0Q0FBOEI7RUFFOUIsd0NBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsaURBQWlEO0VBQ2pELGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBRlo7SUFLSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBRUksK0JBQStCLEVBQUE7O0FBRm5DO0VBTUksZ0NBQWdDLEVBQUE7O0FBTnBDO0VBVUksaUNBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tY29sb3IxOiAjMmUyZjQ0O1xuICAtLWNvbG9yMjogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3IzOiAjMWNhYWE1O1xuICAtLWNvbG9yNDogIzNmM2Y1NTtcbiAgLS1jb2xvcjU6ICM4YzhjYTg7XG5cbiAgLS1iYWNrZ3JvdW5kQ29sb3ItaG9tZVBhZ2U6IHZhcigtLWNvbG9yMSk7XG4gIC0tY29sb3ItaG9tZVBhZ2U6IHZhcigtLWNvbG9yMyk7XG4gIC0taHItaG9tZVBhZ2U6IHZhcigtLWNvbG9yNCk7XG4gIC0tY29sb3ItaDItaG9tZVBhZ2U6IHZhcigtLWNvbG9yMyk7XG4gIC0tY29sb3ItdGV4dC1ob21lUGFnZTogdmFyKC0tY29sb3I1KTtcblxuICAtLWJvcmRlckNvbG9yLWF1dG9jb21wbGl0ZTogdmFyKC0tY29sb3IyKTtcbiAgLS1jb2xvci1hdXRvY29tcGxpdGU6IHZhcigtLWNvbG9yNSk7XG4gIC0tYmFja2dyb3VuZENvbG9yLWF1dG9jb21wbGl0ZTogdmFyKC0tY29sb3I0KTtcblxuICAtLWNvbG9yLWF1dG9jb21wbGl0ZVNlYXJjaEljb246IHZhcigtLWNvbG9yMyk7XG4gIC0tY29sb3ItYXV0b2NvbXBsaXRlQ2xvc2VJY29uOiB2YXIoLS1jb2xvcjMpO1xuXG4gIC0tYmFja2dyb3VuZENvbG9yLWNvbnRlbnQ6IHZhcigtLWNvbG9yNCk7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3ItaG9tZVBhZ2UpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZC1ub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ob21lUGFnZSk7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5ub3RlcyB7XG4gIGgyIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaDItaG9tZVBhZ2UpO1xuICB9XG5cbiAgaHIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taHItaG9tZVBhZ2UpO1xuICB9XG5cbiAgbGkge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWhvbWVQYWdlKTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "test-issue";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.directive */ "./src/app/components/autocomplete/autocomplete.directive.ts");
/* harmony import */ var _services_geo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/geo.service */ "./src/app/services/geo.service.ts");
/* harmony import */ var _components_autocomplete_result_autocomplete_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/autocomplete-result/autocomplete-result.component */ "./src/app/components/autocomplete-result/autocomplete-result.component.ts");
/* harmony import */ var _components_autocomplete_result_autocomplete_result_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/autocomplete-result/autocomplete-result.service */ "./src/app/components/autocomplete-result/autocomplete-result.service.ts");
/* harmony import */ var _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.component */ "./src/app/components/autocomplete/autocomplete.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_6__["AutocompleteDirective"],
                _components_autocomplete_result_autocomplete_result_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteResultComponent"],
                _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_10__["AutocompleteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _services_geo_service__WEBPACK_IMPORTED_MODULE_7__["GeoService"],
                _components_autocomplete_result_autocomplete_result_service__WEBPACK_IMPORTED_MODULE_9__["AutocompleteResultService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/autocomplete-result/autocomplete-result.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/autocomplete-result/autocomplete-result.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showSearchResult; else noResults\">\n    <div class=\"autocomplete-results\">\n        <ul>\n            <li *ngFor=\"let city of searchResult.geonames\">\n                <p><b>{{ city.name }}</b></p>\n                <small>{{ city.countryName }}</small>\n            </li>\n        </ul>\n    </div>\n</div>\n\n<ng-template #noResults>\n    <p *ngIf=\"noResultText\"\n       class=\"no-results\">{{ noResultText }}</p>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/autocomplete-result/autocomplete-result.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/autocomplete-result/autocomplete-result.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".autocomplete-results {\n  border: 1px solid #2d2d4f;\n  border-left: 0 none;\n  border-right: 0 none;\n  position: relative;\n  left: -2px;\n  background-color: #3f3f55; }\n  .autocomplete-results li {\n    padding: 5px;\n    border-top: 1px solid #2d2d4f;\n    color: #8c8ca8; }\n  .autocomplete-results li:hover {\n      background-color: #f7911e;\n      color: white; }\n  .autocomplete-results li:first-child {\n      border: 0 none; }\n  .no-results {\n  margin-top: 5px;\n  font-size: 20px;\n  text-align: center;\n  color: #8c8ca8;\n  background-color: #3f3f55; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbmkvcHJvamVjdHMvcHJpdmF0ZS90ZXN0X2dlby90ZXN0LWlzc3VlL3NyYy9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUtcmVzdWx0L2F1dG9jb21wbGV0ZS1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QixFQUFBO0VBTjFCO0lBU0csWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixjQUFjLEVBQUE7RUFYakI7TUFjSyx5QkFBeUI7TUFDekIsWUFBWSxFQUFBO0VBZmpCO01BbUJLLGNBQWMsRUFBQTtFQU10QjtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLXJlc3VsdC9hdXRvY29tcGxldGUtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dG9jb21wbGV0ZSB7XG4gICYtcmVzdWx0cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJkMmQ0ZjtcbiAgICBib3JkZXItbGVmdDogMCBub25lO1xuICAgIGJvcmRlci1yaWdodDogMCBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjNmNTU7XG5cbiAgICBsaSB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzJkMmQ0ZjtcbiAgICAgIGNvbG9yOiAjOGM4Y2E4O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3OTExZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5uby1yZXN1bHRzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM4YzhjYTg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjNmNTU7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/autocomplete-result/autocomplete-result.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/autocomplete-result/autocomplete-result.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AutocompleteResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteResultComponent", function() { return AutocompleteResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_geo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/geo.service */ "./src/app/services/geo.service.ts");
/* harmony import */ var _autocomplete_result_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete-result.service */ "./src/app/components/autocomplete-result/autocomplete-result.service.ts");




var AutocompleteResultComponent = /** @class */ (function () {
    function AutocompleteResultComponent(elementReference, geoService, autocompliteResultService) {
        var _this = this;
        this.elementReference = elementReference;
        this.geoService = geoService;
        this.autocompliteResultService = autocompliteResultService;
        this.showSearchResult = false;
        this.noResultText = "";
        this.geoService.newResults.subscribe(function (responseGetGeolocation) {
            _this.searchResult = responseGetGeolocation;
            if (responseGetGeolocation.geonames.length === 0) {
                _this.showSearchResult = false;
                _this.noResultText = "There is no results...";
            }
            else {
                _this.showSearchResult = true;
                _this.noResultText = "";
            }
        });
        this.autocompliteResultService.displayResultsEvent.subscribe(function (isSerachResult) {
            _this.showSearchResult = isSerachResult;
        });
    }
    AutocompleteResultComponent.prototype.ngOnInit = function () {
    };
    AutocompleteResultComponent.prototype.close = function (event) {
        if (this.elementReference.nativeElement.contains(event.target)) {
            /* clicked inside */
            this.geoService.saveSelected(event.target.firstElementChild.innerText);
            this.showSearchResult = false;
        }
        else {
            /* clicked outside */
            var isInputAutocompleteElement = event.target.classList.contains("autocomplete-search");
            if (!isInputAutocompleteElement) {
                this.showSearchResult = false;
                this.noResultText = "";
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AutocompleteResultComponent.prototype, "close", null);
    AutocompleteResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autocomplete-result',
            template: __webpack_require__(/*! ./autocomplete-result.component.html */ "./src/app/components/autocomplete-result/autocomplete-result.component.html"),
            styles: [__webpack_require__(/*! ./autocomplete-result.component.scss */ "./src/app/components/autocomplete-result/autocomplete-result.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_geo_service__WEBPACK_IMPORTED_MODULE_2__["GeoService"],
            _autocomplete_result_service__WEBPACK_IMPORTED_MODULE_3__["AutocompleteResultService"]])
    ], AutocompleteResultComponent);
    return AutocompleteResultComponent;
}());



/***/ }),

/***/ "./src/app/components/autocomplete-result/autocomplete-result.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/autocomplete-result/autocomplete-result.service.ts ***!
  \*******************************************************************************/
/*! exports provided: AutocompleteResultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteResultService", function() { return AutocompleteResultService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var AutocompleteResultService = /** @class */ (function () {
    function AutocompleteResultService() {
        this.displayResults = false;
        this.displayResultsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AutocompleteResultService.prototype.showDisplayResults = function () {
        this.displayResults = true;
        this.displayResultsEvent.emit(this.displayResults);
    };
    AutocompleteResultService.prototype.hideDisplayResults = function () {
        this.displayResults = false;
        this.displayResultsEvent.emit(this.displayResults);
    };
    return AutocompleteResultService;
}());



/***/ }),

/***/ "./src/app/components/autocomplete/autocomplete.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/autocomplete/autocomplete.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@toggleSearchBar]=\"isOpen ? 'open' : 'closed'\"\n     class=\"autocomplete border-left-none\">\n  <span class=\"search-icon\"\n        (click)=\"onOpen()\"></span>\n  <input autocomplete\n         [value]=\"autocompleteValue\"\n         (focus)=\"onFocus()\"\n         class=\"autocomplete-search d-none\"\n         type=\"text\">\n  <app-autocomplete-result></app-autocomplete-result>\n  <span (click)=\"onClose()\"\n        id=\"close\"\n        class=\"close-icon hide\">X</span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/autocomplete/autocomplete.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/autocomplete/autocomplete.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-icon {\n  width: 50px;\n  height: 50px;\n  display: inline-block;\n  position: relative;\n  cursor: pointer; }\n  .search-icon:after {\n    content: 's';\n    width: 50px;\n    height: 50px;\n    position: absolute;\n    font-size: 100px;\n    line-height: 30px;\n    top: 0;\n    left: 0;\n    color: var(--color-autocompliteSearchIcon);\n    text-align: center; }\n  @-webkit-keyframes autocompleteBounce {\n  0% {\n    border-radius: 40px 10px;\n    -webkit-transform: skew(-28deg);\n            transform: skew(-28deg); }\n  20% {\n    border-radius: 10px 40px;\n    -webkit-transform: skew(28deg);\n            transform: skew(28deg); }\n  39% {\n    border-radius: 0;\n    -webkit-transform: skew(0);\n            transform: skew(0); }\n  40% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  60% {\n    -webkit-transform: translateX(20px);\n            transform: translateX(20px); }\n  80% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  @keyframes autocompleteBounce {\n  0% {\n    border-radius: 40px 10px;\n    -webkit-transform: skew(-28deg);\n            transform: skew(-28deg); }\n  20% {\n    border-radius: 10px 40px;\n    -webkit-transform: skew(28deg);\n            transform: skew(28deg); }\n  39% {\n    border-radius: 0;\n    -webkit-transform: skew(0);\n            transform: skew(0); }\n  40% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  60% {\n    -webkit-transform: translateX(20px);\n            transform: translateX(20px); }\n  80% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  .close-icon {\n  width: 45px;\n  height: 50px;\n  position: absolute;\n  font-size: 30px;\n  line-height: 52px;\n  top: calc(50% - 25px);\n  color: var(--color-autocompliteCloseIcon);\n  text-align: center;\n  transition: .3s all; }\n  .close-icon:hover {\n    cursor: pointer; }\n  .close-icon.hide {\n    right: -60px;\n    display: none; }\n  .close-icon.show {\n    right: 60px;\n    display: block; }\n  .autocomplete {\n  position: absolute;\n  right: 0;\n  width: calc(100% + 50px);\n  transition: .4s all;\n  height: 50px;\n  background-color: var(--backgroundColor-content);\n  padding: 5px; }\n  .autocomplete.border-left-none {\n    border-left: 0 none; }\n  .autocomplete-search {\n    position: absolute;\n    height: 50px;\n    box-sizing: border-box;\n    border: 0 none;\n    background-color: var(--backgroundColor-autocomplite);\n    color: var(--color-autocomplite);\n    width: calc(100% - 160px);\n    font-size: 25px;\n    padding: 5px;\n    outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbmkvcHJvamVjdHMvcHJpdmF0ZS90ZXN0X2dlby90ZXN0LWlzc3VlL3NyYy9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQUxqQjtJQVFJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixPQUFPO0lBQ1AsMENBQTBDO0lBQzFDLGtCQUFrQixFQUFBO0VBSXRCO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0Usd0JBQXdCO0lBQ3hCLDhCQUFzQjtZQUF0QixzQkFBc0IsRUFBQTtFQUV4QjtJQUNFLGdCQUFnQjtJQUNoQiwwQkFBa0I7WUFBbEIsa0JBQWtCLEVBQUE7RUFFcEI7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUE7RUFFMUI7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7RUFFN0I7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCLEVBQUE7RUFFOUI7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUEsRUFBQTtFQXZCNUI7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QiwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSx3QkFBd0I7SUFDeEIsOEJBQXNCO1lBQXRCLHNCQUFzQixFQUFBO0VBRXhCO0lBQ0UsZ0JBQWdCO0lBQ2hCLDBCQUFrQjtZQUFsQixrQkFBa0IsRUFBQTtFQUVwQjtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQTtFQUUxQjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTtFQUU3QjtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTtFQUU5QjtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQSxFQUFBO0VBSTVCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtFQVRyQjtJQVlJLGVBQWUsRUFBQTtFQVpuQjtJQWdCSSxZQUFZO0lBQ1osYUFBYSxFQUFBO0VBakJqQjtJQXFCSSxXQUFXO0lBQ1gsY0FBYyxFQUFBO0VBSWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQsWUFBWSxFQUFBO0VBUGQ7SUFVSSxtQkFBbUIsRUFBQTtFQUdyQjtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxxREFBcUQ7SUFDckQsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJ3MnO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYXV0b2NvbXBsaXRlU2VhcmNoSWNvbik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYXV0b2NvbXBsZXRlQm91bmNlIHtcbiAgMCUge1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHggMTBweDtcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTI4ZGVnKTtcbiAgfVxuICAyMCUge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggNDBweDtcbiAgICB0cmFuc2Zvcm06IHNrZXcoMjhkZWcpO1xuICB9XG4gIDM5JSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB0cmFuc2Zvcm06IHNrZXcoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG4uY2xvc2UtaWNvbiB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogNTJweDtcbiAgdG9wOiBjYWxjKDUwJSAtIDI1cHgpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYXV0b2NvbXBsaXRlQ2xvc2VJY29uKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAuM3MgYWxsO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICYuaGlkZSB7XG4gICAgcmlnaHQ6IC02MHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAmLnNob3cge1xuICAgIHJpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5hdXRvY29tcGxldGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogY2FsYygxMDAlICsgNTBweCk7XG4gIHRyYW5zaXRpb246IC40cyBhbGw7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZENvbG9yLWNvbnRlbnQpO1xuICBwYWRkaW5nOiA1cHg7XG5cbiAgJi5ib3JkZXItbGVmdC1ub25lIHtcbiAgICBib3JkZXItbGVmdDogMCBub25lO1xuICB9XG5cbiAgJi1zZWFyY2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3ItYXV0b2NvbXBsaXRlKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYXV0b2NvbXBsaXRlKTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTYwcHgpO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/autocomplete/autocomplete.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/autocomplete/autocomplete.component.ts ***!
  \*******************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_geo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/geo.service */ "./src/app/services/geo.service.ts");
/* harmony import */ var _autocomplete_result_autocomplete_result_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autocomplete-result/autocomplete-result.service */ "./src/app/components/autocomplete-result/autocomplete-result.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");





var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent(geoService, autocompleteResultService, elementReference, renderer2) {
        var _this = this;
        this.geoService = geoService;
        this.autocompleteResultService = autocompleteResultService;
        this.elementReference = elementReference;
        this.renderer2 = renderer2;
        this.autocompleteValue = "";
        this.isSearchBarOpen = false;
        this.isOpen = false;
        this.geoService.newSelected.subscribe(function (newValue) {
            _this.autocompleteValue = newValue;
        });
    }
    AutocompleteComponent.prototype.onFocus = function () {
        var isGeonamesResult = this.geoService.getResults();
        if (isGeonamesResult) {
            this.autocompleteResultService.showDisplayResults();
        }
    };
    AutocompleteComponent.prototype.onOpen = function () {
        var className = "d-none";
        var inputElement = this.elementReference.nativeElement.querySelector("input");
        var isInput = inputElement.classList.contains(className);
        var isCloseButtonElement = this.elementReference.nativeElement.querySelector("#close");
        this.isOpen = true;
        this.isSearchBarOpen = true;
        if (isInput) {
            this.renderer2.removeClass(inputElement, className);
            inputElement.focus();
            this.renderer2.removeClass(isCloseButtonElement, "hide");
            this.renderer2.addClass(isCloseButtonElement, "show");
        }
    };
    AutocompleteComponent.prototype.onClose = function () {
        var className = "d-none";
        var inputElement = this.elementReference.nativeElement.querySelector("input");
        var isInput = inputElement.classList.contains(className);
        var isCloseButtonElement = this.elementReference.nativeElement.querySelector("#close");
        this.isOpen = false;
        this.isSearchBarOpen = false;
        this.autocompleteResultService.hideDisplayResults();
        if (!isInput) {
            this.renderer2.addClass(inputElement, className);
            this.renderer2.addClass(isCloseButtonElement, "hide");
            this.renderer2.removeClass(isCloseButtonElement, "show");
        }
    };
    AutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autocomplete',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./src/app/components/autocomplete/autocomplete.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('toggleSearchBar', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        animation: 'autocompleteBounce .4s',
                        width: 'calc(100% + 50px)',
                        right: '-60px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        animation: 'autocompleteBounce .4s',
                        width: '50px',
                        right: '0'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('.4s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('closed => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('.4s')
                    ]),
                ])
            ],
            styles: [__webpack_require__(/*! ./autocomplete.component.scss */ "./src/app/components/autocomplete/autocomplete.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_service__WEBPACK_IMPORTED_MODULE_2__["GeoService"],
            _autocomplete_result_autocomplete_result_service__WEBPACK_IMPORTED_MODULE_3__["AutocompleteResultService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/components/autocomplete/autocomplete.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/autocomplete/autocomplete.directive.ts ***!
  \*******************************************************************/
/*! exports provided: AutocompleteDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteDirective", function() { return AutocompleteDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_geo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/geo.service */ "./src/app/services/geo.service.ts");



var AutocompleteDirective = /** @class */ (function () {
    function AutocompleteDirective(elementReference, geoService) {
        this.elementReference = elementReference;
        this.geoService = geoService;
        this.minLengthForSearch = 3;
        this.requestQueue = false;
    }
    AutocompleteDirective.prototype.keyEvent = function (event) {
        var _this = this;
        var element = this.elementReference.nativeElement;
        var currentValue = element.value.trim();
        var isElementLength = currentValue.length >= this.minLengthForSearch;
        var isRequestTextChanged = currentValue !== this.previousText;
        setTimeout(
        /* a small delay while user typing */
        function () {
            _this.requestQueue = true;
        }, 400);
        if (isElementLength && isRequestTextChanged && this.requestQueue) {
            this.requestQueue = false;
            this.previousText = currentValue;
            this.geoService.getGeolocation(element.value.trim()).subscribe(function (responseGetGeolocation) {
                _this.geoService.saveSearchResults(responseGetGeolocation);
            }, function (errorGetGeolocation) {
                console.error("errorGetGeolocation", errorGetGeolocation);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AutocompleteDirective.prototype, "keyEvent", null);
    AutocompleteDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[autocomplete]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_geo_service__WEBPACK_IMPORTED_MODULE_2__["GeoService"]])
    ], AutocompleteDirective);
    return AutocompleteDirective;
}());



/***/ }),

/***/ "./src/app/services/geo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/geo.service.ts ***!
  \*****************************************/
/*! exports provided: GeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoService", function() { return GeoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GeoService = /** @class */ (function () {
    function GeoService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = "http://api.geonames.org/searchJSON";
        this.userName = "vicarius";
        this.newResults = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GeoService.prototype.getGeolocation = function (searchText) {
        var url = this.apiUrl + "?q=" + searchText + "&maxRows=10&username=" + this.userName;
        return this.httpClient.get(url); /* FIXME: use pipe from rxjs. catchError */
    };
    GeoService.prototype.saveSearchResults = function (response) {
        this.results = response;
        this.newResults.emit(response);
    };
    GeoService.prototype.saveSelected = function (city) {
        this.selected = city;
        this.newSelected.emit(city);
    };
    GeoService.prototype.getResults = function () {
        return this.results;
    };
    GeoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GeoService);
    return GeoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/antoni/projects/private/test_geo/test-issue/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
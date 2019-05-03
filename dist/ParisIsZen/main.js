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

/***/ "./src/app/adapter/street-adapter.ts":
/*!*******************************************!*\
  !*** ./src/app/adapter/street-adapter.ts ***!
  \*******************************************/
/*! exports provided: StreetAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetAdapter", function() { return StreetAdapter; });
/* harmony import */ var _model_street__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/street */ "./src/app/model/street.ts");

var StreetAdapter = /** @class */ (function () {
    function StreetAdapter() {
    }
    StreetAdapter.prototype.adaptToDisplay = function (item) {
        var street = new _model_street__WEBPACK_IMPORTED_MODULE_0__["Street"]();
        street.name = item.name;
        return street;
    };
    return StreetAdapter;
}());



/***/ }),

/***/ "./src/app/adapter/toilet-adapter.ts":
/*!*******************************************!*\
  !*** ./src/app/adapter/toilet-adapter.ts ***!
  \*******************************************/
/*! exports provided: ToiletAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToiletAdapter", function() { return ToiletAdapter; });
/* harmony import */ var _model_toilet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/toilet */ "./src/app/model/toilet.ts");

var ToiletAdapter = /** @class */ (function () {
    function ToiletAdapter() {
    }
    ToiletAdapter.prototype.adaptToDisplay = function (item) {
        var toilet = new _model_toilet__WEBPACK_IMPORTED_MODULE_0__["Toilet"]();
        toilet.longitude = item.longitude;
        toilet.latitude = item.latitude;
        toilet.address = item.address;
        return toilet;
    };
    return ToiletAdapter;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-map></app-map>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/map/map.component */ "./src/app/component/map/map.component.ts");
/* harmony import */ var _service_get_toilets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/get-toilets.service */ "./src/app/service/get-toilets.service.ts");
/* harmony import */ var _service_get_streets_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/get-streets.service */ "./src/app/service/get-streets.service.ts");
/* harmony import */ var _component_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/search-bar/search-bar.component */ "./src/app/component/search-bar/search-bar.component.ts");
/* harmony import */ var _component_path_information_path_information_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/path-information/path-information.component */ "./src/app/component/path-information/path-information.component.ts");
/* harmony import */ var _service_get_routes_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/get-routes.service */ "./src/app/service/get-routes.service.ts");
/* harmony import */ var _pipe_distance_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipe/distance.pipe */ "./src/app/pipe/distance.pipe.ts");
/* harmony import */ var _pipe_time_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipe/time.pipe */ "./src/app/pipe/time.pipe.ts");
/* harmony import */ var _pipe_address_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipe/address.pipe */ "./src/app/pipe/address.pipe.ts");
/* harmony import */ var _model_Tools__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./model/Tools */ "./src/app/model/Tools.ts");
/* harmony import */ var _adapter_street_adapter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./adapter/street-adapter */ "./src/app/adapter/street-adapter.ts");
/* harmony import */ var _adapter_toilet_adapter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./adapter/toilet-adapter */ "./src/app/adapter/toilet-adapter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _component_map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"],
                _component_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_10__["SearchBarComponent"],
                _component_path_information_path_information_component__WEBPACK_IMPORTED_MODULE_11__["PathInformationComponent"],
                _pipe_distance_pipe__WEBPACK_IMPORTED_MODULE_13__["DistancePipe"],
                _pipe_time_pipe__WEBPACK_IMPORTED_MODULE_14__["TimePipe"],
                _pipe_address_pipe__WEBPACK_IMPORTED_MODULE_15__["AddressPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [
                _service_get_toilets_service__WEBPACK_IMPORTED_MODULE_8__["GetToiletsService"],
                _service_get_streets_service__WEBPACK_IMPORTED_MODULE_9__["GetStreetsService"],
                _service_get_routes_service__WEBPACK_IMPORTED_MODULE_12__["GetRoutesService"],
                _adapter_toilet_adapter__WEBPACK_IMPORTED_MODULE_18__["ToiletAdapter"],
                _adapter_street_adapter__WEBPACK_IMPORTED_MODULE_17__["StreetAdapter"],
                _model_Tools__WEBPACK_IMPORTED_MODULE_16__["Tools"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/map/map.component.css":
/*!*************************************************!*\
  !*** ./src/app/component/map/map.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mapId {\n    height: 50vh;\n    width: 100%;\n    border-radius: 2px 2px;\n}\n\n.dashboard {\n    height: 50vh;\n    width: 98%;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.btn {\n    border: 0;\n    background-color: #00171F;\n    color: white;\n    transition: background-color 0.25s;\n}\n\n.btn:active {\n    background-color: #404040;\n}\n\n.search-bar {\n    margin-top: 10px;\n}\n\n.search-btn {\n    position: fixed;\n    bottom: 30%;\n    height: 50px;\n    margin-top: 10px;\n    border-radius: 2px 2px 2px 2px;\n}\n\n.return-btn {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    position: fixed;\n    top: 44%;\n    left: 5%;\n    z-index: 100000;\n}\n\n.location-group {\n    height: 25px;\n    padding: 5px;\n    margin-top: 5px;\n    border-radius: 2px 2px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: white;\n}\n\n.location-text {\n    width: 85%;\n    margin: 0;\n}\n\n.search-results {\n    width: 100%;\n    margin-top: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n@media all and (min-width: 600px) {\n    .search-results {\n        width: 50%;\n    }\n}\n\n.go-btn {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    position: fixed;\n    top: 42%;\n    right: 5%;\n    z-index: 100000;\n    font-size: 1.5em;\n    font-weight: bold;\n}\n\n.followed-path {\n    width: 100%;\n    margin-top: 5px;\n}\n\n@media all and (min-width: 600px) {\n    .followed-path {\n        width: 50%;\n    }\n}\n\n::ng-deep .leaflet-control-zoom, ::ng-deep .leaflet-control-attribution {\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21hcC9tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFFBQVE7SUFDUixRQUFRO0lBQ1IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcElkIHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDJweDtcbn1cblxuLmRhc2hib2FyZCB7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnRuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTcxRjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcbn1cblxuLmJ0bjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2VhcmNoLWJ0biB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMzAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweCAycHggMnB4IDJweDtcbn1cblxuLnJldHVybi1idG4ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNDQlO1xuICAgIGxlZnQ6IDUlO1xuICAgIHotaW5kZXg6IDEwMDAwMDtcbn1cblxuLmxvY2F0aW9uLWdyb3VwIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHggMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5sb2NhdGlvbi10ZXh0IHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnNlYXJjaC1yZXN1bHRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC5zZWFyY2gtcmVzdWx0cyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuXG4uZ28tYnRuIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQyJTtcbiAgICByaWdodDogNSU7XG4gICAgei1pbmRleDogMTAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb2xsb3dlZC1wYXRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgLmZvbGxvd2VkLXBhdGgge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbn1cblxuOjpuZy1kZWVwIC5sZWFmbGV0LWNvbnRyb2wtem9vbSwgOjpuZy1kZWVwIC5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/component/map/map.component.html":
/*!**************************************************!*\
  !*** ./src/app/component/map/map.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mapId\"></div>\n<div class=\"dashboard\">\n    <app-search-bar class=\"search-bar\" *ngIf=\"locationDetermined && threeRoutes.length != 3\" [myPosition]=\"location\" (myPositionSelected)=\"myPositionSelected($event)\"></app-search-bar>\n    <button class=\"search-btn btn\" *ngIf=\"threeRoutes.length != 3\" type=\"text\" (click)=\"searchClosestToilets()\">SEARCH TOILETS</button>\n\n    <div class=\"location-group\" *ngIf=\"threeRoutes.length === 3\">\n        <div style=\"width: 10%; display: flex; align-items: center\">\n            <img style=\"width: 100%\" src=\"../../../assets/icon-compass.png\" alt=\"compass icon\">\n        </div>\n        <p class=\"location-text\">{{location.name | address}}</p>\n    </div>\n    <button class=\"return-btn btn\" *ngIf=\"threeRoutes.length === 3 && !pathSelected\" type=\"text\" (click)=\"returnFromPathProposal()\">\n        <img style=\"width: 90%\" src=\"../../../assets/icon-return.png\" alt=\"return ion\">\n    </button>\n    <div class=\"search-results\" *ngIf=\"threeRoutes.length == 3 && !pathSelected\">\n        <app-path-information *ngFor=\"let toilet of threeClosestToilets; let i = index\" [toilet]=\"toilet\" [path]=\"threeRoutes[i]\" (change)=\"change($event)\"></app-path-information>\n    </div>\n\n    <button class=\"go-btn btn\" *ngIf=\"routeToToiletDisplayed && !pathSelected\" type=\"text\" (click)=\"goClick()\">Go</button>\n\n\n    <button class=\"return-btn btn\" *ngIf=\"pathSelected\" type=\"text\" (click)=\"returnFromPathSelected()\">\n        <img style=\"width: 90%\" src=\"../../../assets/icon-return.png\" alt=\"return ion\">\n    </button>\n    <div class=\"followed-path\" *ngIf=\"pathSelected\">\n        <app-path-information [toilet]=\"selectedToilet\" [path]=\"displayedRoute\"></app-path-information>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/map/map.component.ts":
/*!************************************************!*\
  !*** ./src/app/component/map/map.component.ts ***!
  \************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_get_toilets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/get-toilets.service */ "./src/app/service/get-toilets.service.ts");
/* harmony import */ var _service_get_routes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/get-routes.service */ "./src/app/service/get-routes.service.ts");
/* harmony import */ var _adapter_toilet_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../adapter/toilet-adapter */ "./src/app/adapter/toilet-adapter.ts");
/* harmony import */ var _model_my_position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/my-position */ "./src/app/model/my-position.ts");
/* harmony import */ var _model_toilet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/toilet */ "./src/app/model/toilet.ts");
/* harmony import */ var _model_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/route */ "./src/app/model/route.ts");
/* harmony import */ var _model_Tools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/Tools */ "./src/app/model/Tools.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MapComponent = /** @class */ (function () {
    function MapComponent(getToilets, getRoutes, toiletAdapter, tools) {
        this.getToilets = getToilets;
        this.getRoutes = getRoutes;
        this.toiletAdapter = toiletAdapter;
        this.tools = tools;
        this.threeClosestToilets = [];
        this.threeRoutes = [];
        this.myIcon1 = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
            iconUrl: '../assets/icon-marker-toilet.png',
            iconSize: [48, 48],
            iconAnchor: [24, 42]
        });
        this.routeToToiletDisplayed = false;
        this.markersArray = [];
        this.locationDetermined = false;
        this.geolocationNotSupported = false;
        this.userFollow = false;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myMap = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('mapId').setView([48.853, 2.35], 15);
        leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]("" + this.tools.leaflet.TILE_LAYER, {
            attribution: 'my map'
        }).addTo(this.myMap);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.location = new _model_my_position__WEBPACK_IMPORTED_MODULE_5__["MyPosition"]();
                _this.location.longitude = position.coords.longitude;
                _this.location.latitude = position.coords.latitude;
                _this.getRoutes.getMyMapBoxPosition(_this.location).subscribe(function (res) {
                    var data2 = res;
                    _this.location.longitude = data2.features[0].geometry.coordinates[0];
                    _this.location.latitude = data2.features[0].geometry.coordinates[1];
                    _this.location.name = data2.features[0].place_name.split(",")[0];
                    _this.locationDetermined = true;
                });
                _this.myMap.setView([_this.location.latitude, _this.location.longitude], 15);
                _this.myPositionMarker = leaflet__WEBPACK_IMPORTED_MODULE_1__["circleMarker"]([_this.location.latitude, _this.location.longitude], { radius: 6, stroke: true, weight: 20, color: '#00A8E8', opacity: 0.4, fill: true, fillColor: '#00A8E8', fillOpacity: 1 }).addTo(_this.myMap);
            }, function (error) {
                _this.location = new _model_my_position__WEBPACK_IMPORTED_MODULE_5__["MyPosition"]();
                _this.locationDetermined = true;
                _this.geolocationNotSupported = true;
            });
        }
    };
    // fonction de calcul de l'itinéraire de ma position à la toilette passée en paramètre
    MapComponent.prototype.routeToToilet = function (toilet) {
        var _this = this;
        var data1;
        this.getRoutes.getToiletsMapBoxPosition(toilet).subscribe(function (result1) {
            data1 = result1;
            var selectedToilet = new _model_toilet__WEBPACK_IMPORTED_MODULE_6__["Toilet"]();
            selectedToilet.longitude = data1.features[0].geometry.coordinates[0];
            selectedToilet.latitude = data1.features[0].geometry.coordinates[1];
            var data3;
            _this.getRoutes.getMapBoxRoute(_this.location, selectedToilet).subscribe(function (result3) {
                data3 = result3;
                var tes = [];
                for (var _i = 0, _a = data3.routes[0].legs[0].steps; _i < _a.length; _i++) {
                    var step = _a[_i];
                    for (var _b = 0, _c = step.intersections; _b < _c.length; _b++) {
                        var intersection = _c[_b];
                        tes.push([intersection.location[1], intersection.location[0]]);
                    }
                }
                data3 = new _model_route__WEBPACK_IMPORTED_MODULE_7__["Route"](tes, data3.routes[0].legs[0].distance, data3.routes[0].legs[0].duration);
                _this.threeRoutes.push(data3);
                if (_this.threeRoutes.length === 1) {
                    _this.routeToToilet(_this.threeClosestToilets[1]);
                }
                else if (_this.threeRoutes.length === 2) {
                    _this.routeToToilet(_this.threeClosestToilets[2]);
                }
            });
        });
    };
    // fonction d'affichage de l'itinéraire passé en paramètre
    MapComponent.prototype.displayRouteToToilet = function (route) {
        if (this.path != null) {
            this.myMap.removeLayer(this.path);
        }
        var waypointsArray = [];
        for (var _i = 0, _a = route.intersections; _i < _a.length; _i++) {
            var intersection = _a[_i];
            waypointsArray.push(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](intersection[0], intersection[1]));
        }
        this.path = new leaflet__WEBPACK_IMPORTED_MODULE_1__["Polyline"](waypointsArray, { color: '#00A8E8' });
        this.myMap.addLayer(this.path);
        var center = {
            latitude: (waypointsArray[0].lat + waypointsArray[waypointsArray.length - 1].lat) / 2,
            longitude: (waypointsArray[0].lng + waypointsArray[waypointsArray.length - 1].lng) / 2
        };
        this.myMap.setView([center.latitude, center.longitude], 15);
    };
    // fonction d'affichage de la position des trois plus proches toilettes ouvertes sur la carte
    MapComponent.prototype.searchClosestToilets = function () {
        var _this = this;
        if (this.geolocationNotSupported || (!this.geolocationNotSupported && this.searchBarValue !== this.location.name)) {
            this.getRoutes.getAddressMapBoxPosition(this.searchBarValue).subscribe(function (result) {
                var reg = /Paris/;
                for (var _i = 0, _a = result.features; _i < _a.length; _i++) {
                    var res = _a[_i];
                    if (reg.test(res.place_name)) {
                        _this.location.longitude = res.geometry.coordinates[0];
                        _this.location.latitude = res.geometry.coordinates[1];
                        _this.location.name = _this.searchBarValue;
                        break;
                    }
                }
                _this.myPositionMarker = leaflet__WEBPACK_IMPORTED_MODULE_1__["circleMarker"]([_this.location.latitude, _this.location.longitude], { radius: 6, stroke: true, weight: 20, color: '#00A8E8', opacity: 0.4, fill: true, fillColor: '#00A8E8', fillOpacity: 1 }).addTo(_this.myMap);
                _this.myMap.setView([_this.location.latitude, _this.location.longitude], 15);
                _this.continueSearch();
            });
        }
        else {
            this.continueSearch();
        }
    };
    MapComponent.prototype.continueSearch = function () {
        var _this = this;
        var time = new Date().getHours();
        this.getToilets.getOpenToilets(time).subscribe(function (result) {
            var openToilets = [];
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var openToilet = result_1[_i];
                openToilets.push(_this.toiletAdapter.adaptToDisplay(openToilet));
            }
            // filtre des trois toilettes les plus proches
            var min = _this.getRoutes.calculateDistance(_this.location.latitude, openToilets[0].latitude, _this.location.longitude, openToilets[0].longitude);
            var closestToilets = [];
            for (var _a = 0, openToilets_1 = openToilets; _a < openToilets_1.length; _a++) {
                var toilet = openToilets_1[_a];
                var distance = _this.getRoutes.calculateDistance(_this.location.latitude, toilet.latitude, _this.location.longitude, toilet.longitude);
                if (distance < min) {
                    min = distance;
                    closestToilets.push(toilet);
                }
            }
            // affichage
            for (var i_1 = closestToilets.length - 1; i_1 > closestToilets.length - 4; i_1--) {
                _this.threeClosestToilets.push(closestToilets[i_1]);
            }
            var i = 0;
            for (var _b = 0, _c = _this.threeClosestToilets; _b < _c.length; _b++) {
                var toilet = _c[_b];
                _this.markersArray[i] = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([toilet.latitude, toilet.longitude], { icon: _this.myIcon1 }).addTo(_this.myMap);
                i++;
            }
            _this.routeToToilet(_this.threeClosestToilets[0]);
        });
    };
    MapComponent.prototype.myPositionSelected = function (event) {
        this.searchBarValue = event;
    };
    MapComponent.prototype.change = function (event) {
        this.displayedRoute = event.path;
        this.displayRouteToToilet(this.displayedRoute);
        this.selectedToilet = event.toilet;
        this.routeToToiletDisplayed = true;
    };
    MapComponent.prototype.goClick = function () {
        var _this = this;
        this.pathSelected = true;
        for (var _i = 0, _a = this.markersArray; _i < _a.length; _i++) {
            var marker = _a[_i];
            this.myMap.removeLayer(marker);
        }
        this.selectedToiletMarker = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([this.selectedToilet.latitude, this.selectedToilet.longitude], { icon: this.myIcon1 }).addTo(this.myMap);
        this.userFollow = true;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.launchUserFollow();
            }, function (error) {
                return;
            });
        }
    };
    MapComponent.prototype.returnFromPathProposal = function () {
        this.locationDetermined = null;
        this.myMap.remove();
        this.ngOnInit();
        this.path = null;
        this.threeClosestToilets = [];
        this.threeRoutes = [];
        this.routeToToiletDisplayed = false;
        this.displayedRoute = null;
        this.pathSelected = false;
        this.selectedToilet = null;
    };
    MapComponent.prototype.returnFromPathSelected = function () {
        this.myMap.removeLayer(this.path);
        this.myMap.removeLayer(this.selectedToiletMarker);
        var i = 0;
        for (var _i = 0, _a = this.threeClosestToilets; _i < _a.length; _i++) {
            var toilet = _a[_i];
            this.markersArray[i] = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([toilet.latitude, toilet.longitude], { icon: this.myIcon1 }).addTo(this.myMap);
            i++;
        }
        this.userFollow = false;
        this.routeToToiletDisplayed = false;
        this.displayedRoute = null;
        this.pathSelected = false;
        this.selectedToilet = null;
    };
    MapComponent.prototype.launchUserFollow = function () {
        var _this = this;
        if (this.userFollow && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.myMap.removeLayer(_this.myPositionMarker);
                _this.myPositionMarker = leaflet__WEBPACK_IMPORTED_MODULE_1__["circleMarker"]([position.coords.latitude, position.coords.longitude], { radius: 6, stroke: true, weight: 20, color: '#00A8E8', opacity: 0.4, fill: true, fillColor: '#00A8E8', fillOpacity: 1 }).addTo(_this.myMap);
            }, function (error) {
                console.log(error);
            });
        }
        setTimeout(function () {
            _this.launchUserFollow();
        }, 5000);
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/component/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/component/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_service_get_toilets_service__WEBPACK_IMPORTED_MODULE_2__["GetToiletsService"], _service_get_routes_service__WEBPACK_IMPORTED_MODULE_3__["GetRoutesService"], _adapter_toilet_adapter__WEBPACK_IMPORTED_MODULE_4__["ToiletAdapter"], _model_Tools__WEBPACK_IMPORTED_MODULE_8__["Tools"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/component/path-information/path-information.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/path-information/path-information.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".path-information-container {\n    height: 80px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px;\n    /* background-color: #f0f1f2; */\n    background-color: white;\n}\n\n.path-information-icon {\n    width: 10%;\n}\n\n.path-information-icon img {\n    width: 100%;\n}\n\n.path-information-text {\n    width: 85%;\n}\n\n.path-information-text p {\n    padding: 3px;\n    margin: 0;\n}\n\n.path-information-route {\n    display: flex;\n    justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3BhdGgtaW5mb3JtYXRpb24vcGF0aC1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvcGF0aC1pbmZvcm1hdGlvbi9wYXRoLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF0aC1pbmZvcm1hdGlvbi1jb250YWluZXIge1xuICAgIGhlaWdodDogODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMWYyOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucGF0aC1pbmZvcm1hdGlvbi1pY29uIHtcbiAgICB3aWR0aDogMTAlO1xufVxuXG4ucGF0aC1pbmZvcm1hdGlvbi1pY29uIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYXRoLWluZm9ybWF0aW9uLXRleHQge1xuICAgIHdpZHRoOiA4NSU7XG59XG5cbi5wYXRoLWluZm9ybWF0aW9uLXRleHQgcCB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnBhdGgtaW5mb3JtYXRpb24tcm91dGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/path-information/path-information.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/path-information/path-information.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"displayRoute()\" class=\"path-information-container\">\n    <div class=\"path-information-icon\">\n        <img src=\"../../../assets/icon-route.png\" alt=\"rank icon\">\n    </div>\n    <div class=\"path-information-text\">\n        <div class=\"path-information-route\">\n            <p>{{path.distance | distance}} m </p>\n            <p>{{path.duration | time}} min</p>\n        </div>\n        <p>{{toilet.address | address}}</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/path-information/path-information.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/path-information/path-information.component.ts ***!
  \**************************************************************************/
/*! exports provided: PathInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathInformationComponent", function() { return PathInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/route */ "./src/app/model/route.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PathInformationComponent = /** @class */ (function () {
    function PathInformationComponent() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PathInformationComponent.prototype.ngOnInit = function () {
    };
    PathInformationComponent.prototype.displayRoute = function () {
        var packageToiletAndPath = {
            path: this.path,
            toilet: this.toilet
        };
        this.change.emit(packageToiletAndPath);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PathInformationComponent.prototype, "toilet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_route__WEBPACK_IMPORTED_MODULE_1__["Route"])
    ], PathInformationComponent.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PathInformationComponent.prototype, "change", void 0);
    PathInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-path-information',
            template: __webpack_require__(/*! ./path-information.component.html */ "./src/app/component/path-information/path-information.component.html"),
            styles: [__webpack_require__(/*! ./path-information.component.css */ "./src/app/component/path-information/path-information.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PathInformationComponent);
    return PathInformationComponent;
}());



/***/ }),

/***/ "./src/app/component/search-bar/search-bar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/search-bar/search-bar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-form {\r\n    display: flex;\r\n}\r\n\r\n.search-bar-icon {\r\n    height: 30px;\r\n    padding: 1px;\r\n    margin-right: 8px;\r\n    width: auto;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.search-bar-icon img {\r\n    height: 85%;\r\n}\r\n\r\n#userInput {\r\n    height: 30px;\r\n    width: 250px;\r\n    border: 0;\r\n    border-radius: 2px 2px;\r\n    text-align: center;\r\n    background-color: white;\r\n}\r\n\r\n.suggestion {\r\n    position: relative;\r\n    height: 30px;\r\n    width: 250px;\r\n    margin: 0;\r\n    background-color: white;\r\n    z-index: 3;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyLWljb24ge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhci1pY29uIGltZyB7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufVxyXG5cclxuI3VzZXJJbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHggMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zdWdnZXN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/search-bar/search-bar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/search-bar/search-bar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"user-form\" [formGroup]=\"userForm\">\n  <div class=\"search-bar-icon\" id=\"icon\">\n    <img src=\"../../../assets/icon-compass-white.png\" alt=\"compass icon\">\n  </div>\n  <input id=\"userInput\" [value]=\"inputValue\" formControlName=\"userInput\" type=\"text\" (ngModelChange)=\"searchBarDisplay($event)\"/>\n</form>\n<p class=\"suggestion\" *ngFor=\"let street of streets\" (click)=\"select(street)\" [style.left]=\"suggestionLeft\">{{street | address}}</p>\n"

/***/ }),

/***/ "./src/app/component/search-bar/search-bar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/search-bar/search-bar.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_get_streets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/get-streets.service */ "./src/app/service/get-streets.service.ts");
/* harmony import */ var _adapter_street_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../adapter/street-adapter */ "./src/app/adapter/street-adapter.ts");
/* harmony import */ var _model_my_position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/my-position */ "./src/app/model/my-position.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(formBuilder, getStreets, streetAdapter) {
        this.formBuilder = formBuilder;
        this.getStreets = getStreets;
        this.streetAdapter = streetAdapter;
        this.myPositionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.streets = [];
        this.previousInputLength = 0;
        this.digitsIndex = [];
        this.spacesIndex = [];
        this.addressNum = [];
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.initSuggestionPosition();
        if (this.myPosition.name) {
            this.inputValue = this.myPosition.name;
        }
        else {
            this.inputValue = '';
        }
    };
    SearchBarComponent.prototype.initForm = function () {
        this.userForm = this.formBuilder.group({
            userInput: ''
        });
    };
    SearchBarComponent.prototype.initSuggestionPosition = function () {
        var _this = this;
        setTimeout(function () {
            _this.suggestionLeft = document.getElementById('icon').clientWidth + 8 + "px";
        }, 250);
    };
    SearchBarComponent.prototype.select = function (street) {
        document.getElementById('userInput').value = street;
        this.streets = [];
        this.myPositionSelected.emit(street);
    };
    SearchBarComponent.prototype.searchBarDisplay = function (event) {
        var _this = this;
        if (event.length < this.previousInputLength) {
            if (this.previousInputLength - 1 === this.digitsIndex[this.digitsIndex.length - 1]) {
                this.digitsIndex.pop();
                this.addressNum.pop();
            }
        }
        var valueArray = event.split('');
        var regDigits = /0|1|2|3|4|5|6|7|8|9/;
        if (event.length > this.previousInputLength) {
            if (regDigits.test(valueArray[valueArray.length - 1])) {
                this.digitsIndex.push(valueArray.length - 1);
                this.addressNum.push(valueArray[valueArray.length - 1].toString());
            }
        }
        for (var i = this.digitsIndex.length - 1; i > -1; i--) {
            valueArray.splice(this.digitsIndex[i], 1);
        }
        this.previousInputLength = event.length;
        if (valueArray.length !== 0) {
            this.spacesIndex = [];
            var regLetters = /a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/;
            for (var i = 0; i < valueArray.length; i++) {
                if (valueArray[i] === ' ') {
                    if ((valueArray[i - 1] && !regLetters.test(valueArray[i - 1])) || !valueArray[i - 1]) {
                        this.spacesIndex.push(i);
                    }
                }
            }
            for (var i = this.spacesIndex.length - 1; i > -1; i--) {
                valueArray.splice(this.spacesIndex[i], 1);
            }
            var name_1 = valueArray.join('');
            this.myPositionSelected.emit(this.addressNum.join('') + " " + name_1.toString());
            if (name_1.length !== 0) {
                this.getStreets.getStreetNames(name_1).subscribe(function (result) {
                    _this.streets = [];
                    if (!result) {
                        return;
                    }
                    for (var i = 0; i < result.length; i++) {
                        if (_this.addressNum.length === 0) {
                            _this.streets.push(_this.streetAdapter.adaptToDisplay(result[i]).name);
                        }
                        else {
                            _this.streets.push(_this.addressNum.join('') + " " + _this.streetAdapter.adaptToDisplay(result[i]).name);
                        }
                    }
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_my_position__WEBPACK_IMPORTED_MODULE_4__["MyPosition"])
    ], SearchBarComponent.prototype, "myPosition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchBarComponent.prototype, "myPositionSelected", void 0);
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/component/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/component/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_get_streets_service__WEBPACK_IMPORTED_MODULE_2__["GetStreetsService"], _adapter_street_adapter__WEBPACK_IMPORTED_MODULE_3__["StreetAdapter"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/model/Tools.ts":
/*!********************************!*\
  !*** ./src/app/model/Tools.ts ***!
  \********************************/
/*! exports provided: Tools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
var Tools = /** @class */ (function () {
    function Tools() {
        this.url = 'http://localhost:8080/';
        this.mapBox = {
            TOKEN: '&access_token=pk.eyJ1IjoieWV1bG1hIiwiYSI6ImNqcHRzcjZmcDA4cGw0OXMybWd4bnYwNDYifQ.uXGMYNG2cGnCa0XCMNvT5Q',
            GEOCODING_URL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
            DIRECTIONS_URL: 'https://api.mapbox.com/directions/v5/mapbox/walking/'
        };
        this.leaflet = {
            TILE_LAYER: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
        };
    }
    return Tools;
}());



/***/ }),

/***/ "./src/app/model/my-position.ts":
/*!**************************************!*\
  !*** ./src/app/model/my-position.ts ***!
  \**************************************/
/*! exports provided: MyPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPosition", function() { return MyPosition; });
var MyPosition = /** @class */ (function () {
    function MyPosition() {
    }
    return MyPosition;
}());



/***/ }),

/***/ "./src/app/model/route.ts":
/*!********************************!*\
  !*** ./src/app/model/route.ts ***!
  \********************************/
/*! exports provided: Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
var Route = /** @class */ (function () {
    function Route(intersections, distance, duration) {
        this.intersections = intersections;
        this.distance = distance;
        this.duration = duration;
    }
    return Route;
}());



/***/ }),

/***/ "./src/app/model/street.ts":
/*!*********************************!*\
  !*** ./src/app/model/street.ts ***!
  \*********************************/
/*! exports provided: Street */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Street", function() { return Street; });
var Street = /** @class */ (function () {
    function Street() {
    }
    return Street;
}());



/***/ }),

/***/ "./src/app/model/toilet.ts":
/*!*********************************!*\
  !*** ./src/app/model/toilet.ts ***!
  \*********************************/
/*! exports provided: Toilet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toilet", function() { return Toilet; });
var Toilet = /** @class */ (function () {
    function Toilet() {
    }
    return Toilet;
}());



/***/ }),

/***/ "./src/app/pipe/address.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipe/address.pipe.ts ***!
  \**************************************/
/*! exports provided: AddressPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPipe", function() { return AddressPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddressPipe = /** @class */ (function () {
    function AddressPipe() {
    }
    AddressPipe.prototype.transform = function (value) {
        var values = value.split('');
        for (var i = 0; i < values.length; i++) {
            if (values[i - 1] === ' ') {
                values[i] = values[i].toUpperCase();
            }
            else {
                values[i] = values[i].toLowerCase();
            }
        }
        return values.join('');
    };
    AddressPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'address' })
    ], AddressPipe);
    return AddressPipe;
}());



/***/ }),

/***/ "./src/app/pipe/distance.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipe/distance.pipe.ts ***!
  \***************************************/
/*! exports provided: DistancePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistancePipe", function() { return DistancePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DistancePipe = /** @class */ (function () {
    function DistancePipe() {
    }
    DistancePipe.prototype.transform = function (value) {
        return (Math.round(value / 10)) * 10;
    };
    DistancePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'distance' })
    ], DistancePipe);
    return DistancePipe;
}());



/***/ }),

/***/ "./src/app/pipe/time.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipe/time.pipe.ts ***!
  \***********************************/
/*! exports provided: TimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePipe", function() { return TimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimePipe = /** @class */ (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (value) {
        return Math.round(value / 60);
    };
    TimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'time' })
    ], TimePipe);
    return TimePipe;
}());



/***/ }),

/***/ "./src/app/service/get-routes.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/get-routes.service.ts ***!
  \***********************************************/
/*! exports provided: GetRoutesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRoutesService", function() { return GetRoutesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Tools */ "./src/app/model/Tools.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetRoutesService = /** @class */ (function () {
    function GetRoutesService(http, tools) {
        this.http = http;
        this.tools = tools;
    }
    GetRoutesService.prototype.getToiletsMapBoxPosition = function (toilet) {
        return this.http.get("" + this.tools.mapBox.GEOCODING_URL + toilet.longitude + "," + toilet.latitude + ".json?&types=address" + this.tools.mapBox.TOKEN);
    };
    GetRoutesService.prototype.getMyMapBoxPosition = function (location) {
        return this.http.get("" + this.tools.mapBox.GEOCODING_URL + location.longitude + "," + location.latitude + ".json?types=address" + this.tools.mapBox.TOKEN);
    };
    GetRoutesService.prototype.getAddressMapBoxPosition = function (address) {
        return this.http.get("" + this.tools.mapBox.GEOCODING_URL + address + ".json?bbox=2.244911,48.814369,2.423027,48.904734" + this.tools.mapBox.TOKEN);
    };
    GetRoutesService.prototype.getMapBoxRoute = function (location, toilet) {
        return this.http.get("" + this.tools.mapBox.DIRECTIONS_URL + location.longitude + "," + location.latitude + ";" + toilet.longitude + "," + toilet.latitude + "?steps=true" + this.tools.mapBox.TOKEN);
    };
    GetRoutesService.prototype.calculateDistance = function (latA, latB, lonA, lonB) {
        return ((Math.acos(Math.sin(latA) * Math.sin(latB) + Math.cos(latA) * Math.cos(latB) * Math.cos(lonB - lonA))) * 6378137);
    };
    GetRoutesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _model_Tools__WEBPACK_IMPORTED_MODULE_1__["Tools"]])
    ], GetRoutesService);
    return GetRoutesService;
}());



/***/ }),

/***/ "./src/app/service/get-streets.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/get-streets.service.ts ***!
  \************************************************/
/*! exports provided: GetStreetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStreetsService", function() { return GetStreetsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Tools */ "./src/app/model/Tools.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetStreetsService = /** @class */ (function () {
    function GetStreetsService(http, tools) {
        this.http = http;
        this.tools = tools;
    }
    GetStreetsService.prototype.getStreetNames = function (regex) {
        return this.http.get(this.tools.url + "streets/" + regex);
    };
    GetStreetsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _model_Tools__WEBPACK_IMPORTED_MODULE_1__["Tools"]])
    ], GetStreetsService);
    return GetStreetsService;
}());



/***/ }),

/***/ "./src/app/service/get-toilets.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/get-toilets.service.ts ***!
  \************************************************/
/*! exports provided: GetToiletsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetToiletsService", function() { return GetToiletsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Tools */ "./src/app/model/Tools.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetToiletsService = /** @class */ (function () {
    function GetToiletsService(http, tools) {
        this.http = http;
        this.tools = tools;
    }
    GetToiletsService.prototype.getOpenToilets = function (time) {
        return this.http.get(this.tools.url + "toilets/" + time);
    };
    GetToiletsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _model_Tools__WEBPACK_IMPORTED_MODULE_1__["Tools"]])
    ], GetToiletsService);
    return GetToiletsService;
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

module.exports = __webpack_require__(/*! C:\Users\mayeu\Desktop\usb-import\projet\paris-zen\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
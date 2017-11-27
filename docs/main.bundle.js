webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__err_err_component__ = __webpack_require__("../../../../../src/app/err/err.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
            }, {
                path: 'home',
                redirectTo: '/'
            }
        ]
    }, {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__err_err_component__["a" /* ErrComponent */]
    }];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- APP MAIN -->\n<div class=\"app-main\">\n\t<router-outlet></router-outlet>\n</div>\n<!-- APP MAIN -->"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody {\n  font-family: Verdana, \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n\nhtml,\nbody {\n  font-size: 16px !important; }\n\n@media (min-width: 1280px) and (max-width: 1919px) {\n  html,\n  body {\n    font-size: 0.0125vw !important; } }\n\n@media (min-width: 1920px) {\n  html,\n  body {\n    font-size: 24px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'HOTAX';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__busca_busca_component__ = __webpack_require__("../../../../../src/app/busca/busca.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__err_err_component__ = __webpack_require__("../../../../../src/app/err/err.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__range_pipe__ = __webpack_require__("../../../../../src/app/range.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__busca_busca_component__["a" /* BuscaComponent */],
                __WEBPACK_IMPORTED_MODULE_10__err_err_component__["a" /* ErrComponent */],
                __WEBPACK_IMPORTED_MODULE_11__range_pipe__["a" /* RangePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_completer__["b" /* Ng2CompleterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/busca/busca.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-busca\">\n  busca works!\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/busca/busca.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/busca/busca.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BuscaComponent = (function () {
    function BuscaComponent(http) {
        this.http = http;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        //  db: GetTable | null;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatTableDataSource */]();
        this.total = 0;
        this.isLoading = false;
        this.isEnd = false;
    }
    BuscaComponent.prototype.ngAfterViewInit = function () {
        /*
        this.db = new GetTable(this.http);
    
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    
        Observable.merge(this.sort.sortChange, this.paginator.page)
          .startWith(null)
          .switchMap(() => {
            this.isLoading = true;
            return this.db!.getHotels(
              this.city, this.uf, this.country, this.dataIda, this.dataVolta, this.len, this.adults, this.rate);
          })
          .map(data => {
            // Flip flag to show that loading has finished.
            this.isLoading = false;
            this.isEnd = false;
            this.total = data.total_count;
    
            return data.items;
          })
          .catch(() => {
            this.isLoading = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            this.isEnd = true;
            return Observable.of([]);
          })
          .subscribe(data => this.dataSource.data = data);
      }
    }
    
    export interface EanApi {
      items: GithubIssue[];
      total_count: number;
    }
    
    export interface GithubIssue {
      created_at: string;
      number: string;
      state: string;
      title: string;
    }
    
    export class GetTable {
      constructor(private http: HttpClient) {}
    
      getHotels(city: string, uf: string, country: string, dataIda: string, dataVolta: string, len: number, adults: number, kids: number, rate: boolean): Observable<EanApi>{
        const api = '';
        const href = '/eanapi/list';
        const temRate = rate ? '' : '<rateType>MerchantPackage</rateType>';
        const sig = Md5.hashStr(api + '' + Math.floor(new Date().getTime() / 1000));
        const requestUrl = `${href}
            ?cid=
            &apiKey=$(api)
            &sig=$(sig)
            &minorRev=99
            &locale=pt_BR
            &currencyCode=BRL
            &xml=
                <HotelListRequest>
                    <city>
                        $(city)
                    </city>
                    <stateProvinceCode>
                        $(uf)
                    </stateProvinceCode>
                    <countryCode>
                        $(country)
                    </countryCode>
                    <departureDate>
                        $(dataIda)
                    </departureDate>
                    <arrivalDate>
                        $(dataVolta)
                    </arrivalDate>
                    <RoomGroup>
                        <Room>
                            <numberOfAdults>
                                $(adults)
                            </numberOfAdults>
                            <numberOfChildren>
                                $(kids)
                            </numberOfChildren>
                            <childAges>
                            </childAges>
                        </Room>
                    </RoomGroup>
                    <numberOfResults>
                        $(len)
                    </numberOfResults>
                    $(temRate)
                </HotelListRequest>
            `;
        return this.http.get<EanApi>(requestUrl);
      */
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatPaginator */])
    ], BuscaComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatSort */])
    ], BuscaComponent.prototype, "sort", void 0);
    BuscaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-busca',
            template: __webpack_require__("../../../../../src/app/busca/busca.component.html"),
            styles: [__webpack_require__("../../../../../src/app/busca/busca.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BuscaComponent);
    return BuscaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/err/err.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-err\">\n  err works!\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/err/err.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/err/err.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrComponent = (function () {
    function ErrComponent() {
    }
    ErrComponent.prototype.ngOnInit = function () {
    };
    ErrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-err',
            template: __webpack_require__("../../../../../src/app/err/err.component.html"),
            styles: [__webpack_require__("../../../../../src/app/err/err.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ErrComponent);
    return ErrComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-home\">\n\t<div class=\"head\">\n\t\t<h1><img [attr.src]=\"vars.logo.url\" [attr.alt]=\"vars.logo.alt\"></h1>\n\t\t<p class=\"fgc c1\" [innerHTML]=\"vars.slogan\"></p>\n\t</div>\n\t<div class=\"body\">\n\t\t<form class=\"wrap\" (ngSubmit)=\"onSubmit()\" novalidate>\n\t\t\t<div class=\"search\">\n\t\t\t\t<label>\n\t\t\t\t\t<ng2-completer (selected)=\"onCompleterSelected($event)\" [(initialValue)]=\"mdl.busca.init\" [clearUnselected]=\"true\" [autoMatch]=\"true\" [inputClass]=\"'busca-ctrl'\" [autofocus]=\"true\" [textSearching]=\"null\" [textNoResults]=\"null\" name=\"busca\" [inputName]=\"'busca'\" [placeholder]=\"mdl.busca.placeholder\" [(ngModel)]=\"mdl.busca.val\" [datasource]=\"customData\" [minSearchLength]=\"3\" [fieldTabindex]=\"1\" [selectOnClick]=\"true\" [openOnClick]=\"true\" [matchClass]=\"'completer-highlighted-word'\"></ng2-completer>\n\t\t\t\t\t<span class=\"icon\"></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"opt\">\n\t\t\t\t<div class=\"checkin\">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input placeholder=\"MM/DD/YYYY\" name=\"entrada\" [(ngModel)]=\"mdl.entrada\">\n\t\t\t\t\t\t<span class=\"label\"><span>Check-in</span></span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"checkout\">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input (keydown.Tab)=\"nextInput($event)\" placeholder=\"MM/DD/YYYY\" name=\"saida\" [(ngModel)]=\"mdl.saida\">\n\t\t\t\t\t\t<span class=\"label\"><span>Check-out</span></span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"rooms\" class=\"rooms\">\n\t\t\t\t\t<div class=\"quartos\" (click)=\"onClick($event.target)\">\n\t\t\t\t\t\t<span class=\"label\">\n\t\t\t\t\t\t\t<span class=\"icon-room\">\n\t\t\t\t\t\t\t\t<img [attr.src]=\"vars.icons.room\" alt=\"Q\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"val\" [textContent]=\"mdl.room.total\"></span>\n\t\t\t\t\t\t<span class=\"pessoas\">\n\t\t\t\t\t\t\t\t<span class=\"icon-people\">\n\t\t\t\t\t\t\t\t\t<img [attr.src]=\"vars.icons.people\" alt=\"P\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"val\" [textContent]=\"mdl.room.people.total\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div [attr.class]=\"'room' + (open.rooms ? ' show topArrow rightAlign' : '')\">\n\t\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\t\t<a (click)=\"show.room = n\" [attr.class]=\"'btn' + (show.room === n ? ' bgc c1 active':'')\" *ngFor=\"let p of mdl.room.people.list; let n = index;\">\n\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\tQuarto {{n + 1}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<span [hidden]=\"mdl.room.total <= 1\" class=\"icon-remove remove\" (click)=\"rmRoom(show.room)\">\n\t\t\t\t\t\t\t\t<img [attr.src]=\"vars.icons.remove\" alt=\"&times;\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"content\" #quartosWrap>\n\t\t\t\t\t\t\t<div [attr.class]=\"'room' + (n + 1) + ' ' + (show.room > n ? 'alignL' : (show.room === n ? 'alignC' : 'alignR'))\" *ngFor=\"let p of mdl.room.people.list; let n = index;\">\n\t\t\t\t\t\t\t\t<div class=\"campos wrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"people\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t<span>Adultos (18 anos)</span>\n\t\t\t\t\t\t\t\t\t\t\t<input (focus)=\"show.room = n; quartosWrap.scrollLeft = 0;\" type=\"number\" placeholder=\"\" min=\"1\" max=\"{{mdl.room.people.limit}}\" id=\"adults[{{p.name}}]\" name=\"adults[{{p.name}}]\" [ngModel]=\"p.more18\" (ngModelChange)=\"changeAdult(n, $event, 'adults[' + p.name + ']')\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t<span>Crianças (0-17 anos)</span>\n\t\t\t\t\t\t\t\t\t\t\t<input (focus)=\"show.room = n\" min=\"0\" max=\"{{mdl.room.people.limit}}\" step=\"1\" type=\"number\" id=\"children[{{p.name}}]\" name=\"children[{{p.name}}]\" [ngModel]=\"p.less18.total\" (ngModelChange)=\"changeChild(n, $event, 'children[' + p.name + ']')\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"children wrap\">\n\t\t\t\t\t\t\t\t\t\t<label *ngFor=\"let pp of p.less18.list; let nn = index\">\n\t\t\t\t\t\t\t\t\t\t\t<span>Criança {{ nn + 1 }}</span>\n\t\t\t\t\t\t\t\t\t\t\t<input (focus)=\"show.room = n\" type=\"number\" max=\"17\" min=\"0\" placeholder=\"\" name=\"childage[{{p.name}}][{{nn}}]\" [(ngModel)]=\"pp.age\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a [hidden]=\"mdl.room.total >= mdl.room.limit\" [attr.class]=\"'add bgc c1' + (mdl.room.disabled ? ' disabled' : '')\" href=\"javascript:;\" (click)=\"addRoom(mdl.room.total)\">Adicionar Quarto</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"submit\">\n\t\t\t\t\t<input class=\"bgc c1\" type=\"submit\" value=\"Busca\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"eanKeys\" *ngIf=\"open.keys\">\n\t\t\t\t<input placeholder=\"eanCID\" name=\"cid\" [(ngModel)]=\"mdl.keys.cid\">\n\t\t\t\t<input placeholder=\"eanAPIKey\" name=\"api\" [(ngModel)]=\"mdl.keys.api\">\n\t\t\t\t<input placeholder=\"eanSharedSecret\" name=\"secret\" [(ngModel)]=\"mdl.keys.secret\">\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\t<div class=\"foot\" *ngIf=\"vars.hotelList.HotelListResponse || vars.hotelList.HotelListResponseStr.length\">\n\t\t<div *ngIf=\"vars.hotelList.HotelListResponse;then content else other_content\"></div>\n\t\t<ng-template #content>\n\t\t\t<div class=\"tabela\">\n\t\t\t\t<table>\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>thumbNailUrl</th>\n\t\t\t\t\t\t\t<th>name</th>\n\t\t\t\t\t\t\t<th>hotelRating</th>\n\t\t\t\t\t\t\t<th>address1</th>\n\t\t\t\t\t\t\t<th>roomDescription</th>\n\t\t\t\t\t\t\t<th>currencyCode</th>\n\t\t\t\t\t\t\t<th>nonRefundable</th>\n\t\t\t\t\t\t\t<th>Markup</th>\n\t\t\t\t\t\t\t<th>HotaxFinalPrice</th>\n\t\t\t\t\t\t\t<th>HotaxFinalCommission%</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let td of vars.hotelList.HotelListResponse\">\n\t\t\t\t\t\t\t<td><img [attr.src]=\"'https://i.travelapi.com' + td.thumbNailUrl\" alt=\"\"></td>\n\t\t\t\t\t\t\t<td [textContent]=\"td.name\"></td>\n\t\t\t\t\t\t\t<td [textContent]=\"td.hotelRating\"></td>\n\t\t\t\t\t\t\t<td [textContent]=\"td.address1\"></td>\n\t\t\t\t\t\t\t<td [innerHTML]=\"td.shortDescription\"></td>\n\t\t\t\t\t\t\t<td [textContent]=\"td.rateCurrencyCode\"></td>\n\t\t\t\t\t\t\t<td>{{ td.RoomRateDetailsList.RoomRateDetails.RateInfos.nonRefundable ? 'SIM' : 'NÃO' }}</td>\n\t\t\t\t\t\t\t<td [textContent]=\"td.RoomRateDetailsList.RoomRateDetails.RateInfos.RateInfo.markup\"></td>\n\t\t\t\t\t\t\t<td [textContent]=\"td.RoomRateDetailsList.RoomRateDetails.RateInfos.RateInfo.hotaxFinalPrice\"></td>\n\t\t\t\t\t\t\t<td [textContent]=\"td.RoomRateDetailsList.RoomRateDetails.RateInfos.RateInfo.hotaxFinalCommissionPercent\"></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template #other_content>{{ vars.hotelList.HotelListResponseStr }}</ng-template>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-home {\n  padding-top: 5rem; }\n  .app-home .topArrow,\n  .app-home .completer-dropdown {\n    position: relative;\n    margin-top: 16px; }\n    .app-home .topArrow:before, .app-home .topArrow:after,\n    .app-home .completer-dropdown:before,\n    .app-home .completer-dropdown:after {\n      content: '';\n      display: block;\n      position: absolute;\n      left: 1rem;\n      top: -16px;\n      width: 0;\n      height: 0; }\n    .app-home .topArrow:before,\n    .app-home .completer-dropdown:before {\n      border: 0 solid transparent;\n      border-width: 0 16px 16px 16px;\n      border-bottom-color: #aaa; }\n    .app-home .topArrow:after,\n    .app-home .completer-dropdown:after {\n      border: 0 solid transparent;\n      border-width: 0 15px 15px 15px;\n      border-bottom-color: #fff;\n      margin-top: 2px;\n      margin-left: 1px; }\n    .app-home .topArrow.rightAlign:before, .app-home .topArrow.rightAlign:after,\n    .app-home .completer-dropdown.rightAlign:before,\n    .app-home .completer-dropdown.rightAlign:after {\n      left: auto;\n      right: 1rem; }\n    .app-home .topArrow.rightAlign:after,\n    .app-home .completer-dropdown.rightAlign:after {\n      margin-left: 0;\n      margin-right: 1px; }\n  .app-home .head {\n    padding-bottom: 2rem;\n    text-align: center; }\n    .app-home .head > h1,\n    .app-home .head > p {\n      display: inline-block;\n      vertical-align: middle; }\n    .app-home .head h1 {\n      width: 29.3rem;\n      height: 9.4rem;\n      border-right: 1px solid #aaa; }\n      .app-home .head h1 img {\n        margin-top: -0.7rem; }\n    .app-home .head p {\n      width: auto;\n      font-size: 1.4rem;\n      font-weight: 600;\n      text-align: left;\n      padding-left: 1.1rem;\n      line-height: 1.2; }\n  .app-home .body form > div.search, .app-home .body form > div.opt,\n  .app-home .body form > div.opt > div {\n    float: left;\n    position: relative;\n    width: 50%; }\n  .app-home .body form > div label {\n    position: relative;\n    display: block; }\n    .app-home .body form > div label .label {\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      width: 100%;\n      height: 100%;\n      border: 1px solid #aaa;\n      background-color: #fff;\n      display: block;\n      padding: 0.5rem;\n      vertical-align: middle;\n      font-size: 1.3rem;\n      color: #aaa;\n      cursor: pointer; }\n      .app-home .body form > div label .label span {\n        vertical-align: middle;\n        display: inline-block; }\n      .app-home .body form > div label .label:before {\n        content: '';\n        width: 0;\n        height: 100%;\n        display: inline-block;\n        vertical-align: middle; }\n    .app-home .body form > div label input:focus ~ .label,\n    .app-home .body form > div label input.ng-dirty ~ .label,\n    .app-home .body form > div label input.ng-touched ~ .label {\n      display: none; }\n  .app-home .body form > div input {\n    border: 1px solid #aaa;\n    display: block;\n    width: 100%;\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    color: #222; }\n    .app-home .body form > div input:focus {\n      outline: 1px solid #243E6F; }\n  .app-home .body form > div.search [ng-reflect-model=\"\"] + div {\n    display: none; }\n  .app-home .body form > div.search .completer-dropdown-holder {\n    margin-top: 1.3rem; }\n    .app-home .body form > div.search .completer-dropdown-holder .completer-dropdown {\n      width: 100%;\n      border: 1px solid #aaa;\n      margin: 0;\n      border-radius: 0;\n      margin-bottom: 2rem;\n      position: relative; }\n      .app-home .body form > div.search .completer-dropdown-holder .completer-dropdown .completer-row-wrapper .completer-row {\n        width: 100%;\n        margin: 0;\n        border-radius: 0;\n        white-space: nowrap;\n        overflow: hidden; }\n        .app-home .body form > div.search .completer-dropdown-holder .completer-dropdown .completer-row-wrapper .completer-row.completer-selected-row {\n          color: #fff;\n          background-color: #243E6F;\n          width: 100%; }\n        .app-home .body form > div.search .completer-dropdown-holder .completer-dropdown .completer-row-wrapper .completer-row .completer-image-holder {\n          float: none;\n          display: inline-block;\n          width: auto;\n          vertical-align: middle; }\n          .app-home .body form > div.search .completer-dropdown-holder .completer-dropdown .completer-row-wrapper .completer-row .completer-image-holder .completer-image {\n            max-width: 1.489rem;\n            width: 100%;\n            display: block;\n            height: auto; }\n            .app-home .body form > div.search .completer-dropdown-holder .completer-dropdown .completer-row-wrapper .completer-row .completer-image-holder .completer-image[src=\"assets/img/icons/lvl1.png\"] {\n              margin-left: 2rem; }\n        .app-home .body form > div.search .completer-dropdown-holder .completer-dropdown .completer-row-wrapper .completer-row .completer-item-text {\n          float: none;\n          display: inline-block;\n          width: auto;\n          vertical-align: middle; }\n          .app-home .body form > div.search .completer-dropdown-holder .completer-dropdown .completer-row-wrapper .completer-row .completer-item-text .completer-title .completer-highlighted-word {\n            color: #fff;\n            background-color: #C0252E; }\n          .app-home .body form > div.search .completer-dropdown-holder .completer-dropdown .completer-row-wrapper .completer-row .completer-item-text .completer-description {\n            display: none; }\n  .app-home .body form > div.search input {\n    padding-left: 3rem; }\n    .app-home .body form > div.search input::-webkit-input-placeholder {\n      color: #aaa; }\n    .app-home .body form > div.search input::-moz-placeholder {\n      color: #aaa; }\n    .app-home .body form > div.search input:-ms-input-placeholder {\n      color: #aaa; }\n    .app-home .body form > div.search input:-moz-placeholder {\n      color: #aaa; }\n  .app-home .body form > div.search .icon {\n    position: absolute;\n    font-size: 2.3rem;\n    display: inline-block;\n    width: 0.4em;\n    height: 0.4em;\n    border: 0.08em solid #aaa;\n    border-radius: 50%;\n    left: 0.5em;\n    top: 0.7rem; }\n    .app-home .body form > div.search .icon:before {\n      content: '';\n      display: inline-block;\n      position: absolute;\n      right: -0.25em;\n      bottom: -0.15em;\n      border-width: 0;\n      background: #aaa;\n      width: 0.3em;\n      height: 0.08em;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n  .app-home .body form > div.opt > div {\n    position: relative;\n    padding-left: .7rem; }\n    .app-home .body form > div.opt > div:before {\n      width: .7rem;\n      height: 100%;\n      display: block;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      cursor: default; }\n  .app-home .body form > div.opt .checkin {\n    width: 24.5%; }\n  .app-home .body form > div.opt .checkout {\n    width: 24.5%; }\n  .app-home .body form > div.opt .rooms {\n    width: 30%;\n    cursor: pointer !important; }\n    .app-home .body form > div.opt .rooms .quartos {\n      border: 1px solid #aaa;\n      display: block;\n      width: 100%;\n      font-size: 1.2rem;\n      padding: 0.5rem;\n      line-height: 1.2;\n      color: #aaa; }\n      .app-home .body form > div.opt .rooms .quartos .pessoas {\n        float: right; }\n    .app-home .body form > div.opt .rooms.touched {\n      cursor: default; }\n      .app-home .body form > div.opt .rooms.touched .quartos .label .val {\n        color: #222; }\n    .app-home .body form > div.opt .rooms .room {\n      display: none;\n      position: absolute;\n      right: 0;\n      top: 100%;\n      width: 256%;\n      border: 1px solid #aaa;\n      padding: 1rem;\n      background-color: #fff;\n      z-index: 1; }\n      .app-home .body form > div.opt .rooms .room .content {\n        overflow: hidden;\n        position: relative;\n        min-height: 11rem; }\n        .app-home .body form > div.opt .rooms .room .content > div {\n          position: absolute;\n          top: 0;\n          left: 0;\n          height: 100%;\n          width: 100%;\n          display: block;\n          transition: left .4s ease;\n          background-color: #fff; }\n      .app-home .body form > div.opt .rooms .room .header {\n        color: #222;\n        border-bottom: 1px solid #aaa;\n        display: block;\n        padding-bottom: 0.5rem;\n        margin-bottom: 1.5rem; }\n        .app-home .body form > div.opt .rooms .room .header .btn {\n          padding: 0.5rem;\n          cursor: pointer; }\n          .app-home .body form > div.opt .rooms .room .header .btn.active {\n            cursor: default;\n            color: #fff; }\n        .app-home .body form > div.opt .rooms .room .header .remove {\n          float: right;\n          font-weight: 600;\n          font-size: 2rem;\n          cursor: pointer;\n          line-height: 0.5; }\n      .app-home .body form > div.opt .rooms .room .campos {\n        padding-bottom: 1rem;\n        overflow: auto;\n        height: 100%;\n        display: block;\n        width: 100%; }\n        .app-home .body form > div.opt .rooms .room .campos label {\n          margin-right: 1rem;\n          margin-bottom: 1rem; }\n        .app-home .body form > div.opt .rooms .room .campos label span {\n          white-space: nowrap;\n          padding-bottom: 0.2rem; }\n        .app-home .body form > div.opt .rooms .room .campos .people {\n          display: block;\n          float: left;\n          width: 50%; }\n          .app-home .body form > div.opt .rooms .room .campos .people label,\n          .app-home .body form > div.opt .rooms .room .campos .people label span,\n          .app-home .body form > div.opt .rooms .room .campos .people label input {\n            display: block; }\n        .app-home .body form > div.opt .rooms .room .campos .children {\n          display: block;\n          float: left;\n          width: 50%; }\n          .app-home .body form > div.opt .rooms .room .campos .children label span {\n            white-space: nowrap; }\n          .app-home .body form > div.opt .rooms .room .campos .children label,\n          .app-home .body form > div.opt .rooms .room .campos .children label span,\n          .app-home .body form > div.opt .rooms .room .campos .children label input {\n            float: left;\n            width: 4.4rem; }\n    .app-home .body form > div.opt .rooms .room.show {\n      display: block;\n      cursor: default !important; }\n      .app-home .body form > div.opt .rooms .room.show .alignL {\n        left: -100%; }\n      .app-home .body form > div.opt .rooms .room.show .alignC {\n        left: 0%; }\n      .app-home .body form > div.opt .rooms .room.show .alignR {\n        left: 100%; }\n    .app-home .body form > div.opt .rooms .add {\n      cursor: pointer;\n      text-decoration: none;\n      color: #fff;\n      padding: 0.5rem;\n      display: inline-block;\n      margin: 1rem 0 0;\n      float: right; }\n      .app-home .body form > div.opt .rooms .add[hidden] {\n        visibility: hidden; }\n      .app-home .body form > div.opt .rooms .add.disabled {\n        background-color: #aaa; }\n      .app-home .body form > div.opt .rooms .add:focus, .app-home .body form > div.opt .rooms .add:hover, .app-home .body form > div.opt .rooms .add:active {\n        opacity: .7; }\n  .app-home .body form > div.opt .submit {\n    width: 21%;\n    border: 1px solid #fff; }\n    .app-home .body form > div.opt .submit input {\n      line-height: normal;\n      overflow: visible;\n      -webkit-appearance: button;\n         -moz-appearance: button;\n              appearance: button;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      color: #fff;\n      border: 0;\n      text-align: center;\n      cursor: pointer;\n      border: 1px solid #243E6F; }\n      .app-home .body form > div.opt .submit input:focus, .app-home .body form > div.opt .submit input:hover, .app-home .body form > div.opt .submit input:active {\n        opacity: .7; }\n  .app-home .body form > div .icon-remove {\n    width: 1.4rem;\n    display: inline-block;\n    margin-top: -0.3rem; }\n    .app-home .body form > div .icon-remove img {\n      width: 100%;\n      height: auto;\n      display: block; }\n    .app-home .body form > div .icon-remove[hidden] {\n      visibility: hidden; }\n  .app-home .body form > div .icon-room,\n  .app-home .body form > div .icon-people {\n    width: 1rem;\n    display: inline-block; }\n    .app-home .body form > div .icon-room img,\n    .app-home .body form > div .icon-people img {\n      width: 100%;\n      height: auto;\n      display: block; }\n  .app-home .foot {\n    padding-top: 4rem; }\n    .app-home .foot .tabela {\n      position: relative; }\n    .app-home .foot table {\n      font-family: Arial, Helvetica, sans-serif;\n      color: #666;\n      font-size: 12px;\n      text-shadow: 1px 1px 0px #fff;\n      background: #eaebec;\n      border: #ccc 1px solid;\n      border-radius: 3px;\n      box-shadow: 0 1px 2px #d1d1d1;\n      position: absolute;\n      top: 0;\n      -webkit-transform: translate(-50%, 0);\n              transform: translate(-50%, 0);\n      left: 50%; }\n      .app-home .foot table a:link {\n        color: #666;\n        font-weight: bold;\n        text-decoration: none; }\n      .app-home .foot table a:visited {\n        color: #999999;\n        font-weight: bold;\n        text-decoration: none; }\n      .app-home .foot table a:active,\n      .app-home .foot table a:hover {\n        color: #bd5a35;\n        text-decoration: underline; }\n      .app-home .foot table th {\n        padding: 21px 25px 22px 25px;\n        border-top: 1px solid #fafafa;\n        border-bottom: 1px solid #e0e0e0;\n        background: #ededed;\n        background: -moz-linear-gradient(top, #ededed, #ebebeb); }\n      .app-home .foot table th:first-child {\n        text-align: left;\n        padding-left: 20px; }\n      .app-home .foot table tr:first-child th:first-child {\n        border-top-left-radius: 3px; }\n      .app-home .foot table tr:first-child th:last-child {\n        border-top-right-radius: 3px; }\n      .app-home .foot table tr {\n        text-align: center;\n        padding-left: 20px; }\n      .app-home .foot table td:first-child {\n        text-align: left;\n        padding-left: 20px;\n        border-left: 0; }\n      .app-home .foot table td {\n        padding: 18px;\n        border-top: 1px solid #ffffff;\n        border-bottom: 1px solid #e0e0e0;\n        border-left: 1px solid #e0e0e0;\n        background: #fafafa;\n        background: -moz-linear-gradient(top, #fbfbfb, #fafafa); }\n      .app-home .foot table tr.even td {\n        background: #f6f6f6;\n        background: -moz-linear-gradient(top, #f8f8f8, #f6f6f6); }\n      .app-home .foot table tr:last-child td {\n        border-bottom: 0; }\n      .app-home .foot table tr:last-child td:first-child {\n        border-bottom-left-radius: 3px; }\n      .app-home .foot table tr:last-child td:last-child {\n        border-bottom-right-radius: 3px; }\n      .app-home .foot table tr:hover td {\n        background: #f2f2f2;\n        background: -moz-linear-gradient(top, #f2f2f2, #f0f0f0); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__regions__ = __webpack_require__("../../../../../src/app/home/regions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(http, httpC, completerService) {
        this.http = http;
        this.httpC = httpC;
        this.completerService = completerService;
        this.vars = {
            slogan: 'Encontre o hotel ideal para o seu cliente,<br>com a melhor comissão para você!',
            logo: {
                alt: 'HOTAX',
                url: 'assets/img/logo.svg'
            },
            icons: {
                people: 'assets/img/icons/people.png',
                room: 'assets/img/icons/room.png',
                remove: 'assets/img/icons/remove.png'
            },
            el: null,
            name: 0,
            hotelList: {
                HotelListResponse: null,
                HotelListResponseStr: '',
                markup: []
            }
        };
        this.open = {
            rooms: false,
            keys: false
        };
        this.show = {
            room: 0
        };
        /*
            &room[room number, starting with 1]=
            [number of adults],
            [comma-delimited list of children's ages]
    
            city=Seattle
            arrivalDate=12/2/2017
            departureDate=12/4/2017
            numberOfAdults=2
            
            
            countryCode=US
            numberOfResults=500
            rateType=sim
        */
        this.mdl = {
            busca: {
                val: '',
                init: {
                    title: '',
                    description: '',
                    image: ''
                },
                icon: '',
                regionId: '0',
                placeholder: 'Ex: São Paulo'
            },
            entrada: '',
            saida: '',
            keys: {
                cid: '',
                api: '',
                secret: ''
            },
            room: {
                limit: 4,
                total: 1,
                disabled: false,
                people: {
                    total: 2,
                    limit: 8,
                    list: [{
                            name: 0,
                            more18: 2,
                            less18: {
                                total: 0,
                                list: []
                            }
                        }]
                }
            }
        };
        this.cookie = function (prop, val) {
            var ret = prop ? document.cookie.match((new RegExp(prop.toString() + '=(.*?)(;|$)'))) : ['', false];
            if (val !== undefined)
                document.cookie = prop + '=' + val + '' + '; expires=' + new Date('01/01/2038').toUTCString() + '; path=/;';
            return val ? val : (ret && ret.length > 1 ? ret[1] : '');
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.customData = new __WEBPACK_IMPORTED_MODULE_4__regions__["a" /* CustomData */](this.http);
        this.vars.el = document.getElementById('rooms');
        if (!this.cookie('cid'))
            this.open.keys = true;
        else {
            this.mdl.keys = {
                cid: this.cookie('cid'),
                api: this.cookie('api'),
                secret: this.cookie('secret')
            };
            if (this.cookie('busca')) {
                this.mdl.busca.init = {
                    title: this.cookie('busca-val'),
                    image: this.cookie('busca-img'),
                    description: this.cookie('busca-id')
                };
            }
            this.mdl.entrada = this.cookie('entrada');
            this.mdl.saida = this.cookie('saida');
        }
    };
    HomeComponent.prototype.nextInput = function (ev) {
        var tgt = ev.target;
        tgt = tgt ? tgt.parentNode.parentNode.parentNode : document;
        tgt = tgt.querySelector('.room input');
        this.open.rooms = true;
        if (tgt)
            tgt.focus();
    };
    HomeComponent.prototype.addRoom = function (index) {
        var self = this, r = self.mdl.room, i = r.people.list.length, ii = index, name = ++self.vars.name, el;
        setTimeout(function () {
            el = document.activeElement;
            if (el)
                el.blur();
        }, 0);
        if (r.total >= r.limit)
            return;
        if (r.people.total >= r.people.limit) {
            r.disabled = true;
            return;
        }
        setTimeout(function () {
            self.show.room = ii;
        }, 0);
        r.total++;
        r.people.list.push({
            name: name,
            more18: 0,
            less18: {
                total: 0,
                list: []
            }
        });
        r.people.total++;
        r.people.list[i].more18 = 1;
        r.disabled = r.people.total >= r.people.limit;
    };
    HomeComponent.prototype.changeAdult = function (index, val, nome) {
        var p = this.mdl.room.people, i = index, old = p.list[i].more18, el;
        val = val | 0;
        if ((p.total + (val - old)) > p.limit) {
            p.list[i].more18 = old;
            el = document.getElementById(nome);
            if (el)
                el.value = old;
        }
        else {
            p.list[i].more18 = val;
            p.total += val - old;
        }
        this.mdl.room.disabled = p.total >= p.limit;
    };
    HomeComponent.prototype.changeChild = function (index, val, nome) {
        function resize(arr, size, defval) {
            var delta = arr.length - size;
            if (delta > 0)
                arr.length = size;
            else
                while (delta++ < 0)
                    arr.push(defval);
            return arr;
        }
        var p = this.mdl.room.people, a = p.list[index].less18, old = p.list[index].less18.total, i = index, el;
        val = val | 0;
        if ((p.total + (val - old)) > p.limit) {
            el = document.getElementById(nome);
            if (el)
                el.value = old;
        }
        else {
            a.list = resize(a.list, val, { age: 0 });
            p.total += val - old;
            a.total = val;
        }
        this.mdl.room.disabled = p.total >= p.limit;
    };
    HomeComponent.prototype.rmRoom = function (index) {
        var self = this, i = index;
        if (self.mdl.room.total <= 1)
            return;
        setTimeout(function () {
            var r = self.mdl.room, p = r.people, tp = p.list[i].more18 + p.list[i].less18.total;
            p.total -= tp;
            r.total--;
            p.list.splice(i, 1);
            if (self.show.room)
                self.show.room--;
            r.disabled = p.total >= p.limit;
        }, 0);
    };
    HomeComponent.prototype.onCompleterSelected = function (e) {
        if (e && e.description) {
            this.mdl.busca.regionId = e.description || '0';
            this.mdl.busca.icon = e.image;
            if (!e.title && e.originalObject.title)
                this.mdl.busca.val = e.originalObject.title;
        }
    };
    HomeComponent.prototype.onKey = function (e) {
        if (e.key === 'Escape' && this.open.rooms) {
            this.open.rooms = false;
        }
    };
    HomeComponent.prototype.onClick = function (e) {
        if (!e || !e.target)
            return true;
        if (this.vars.el) {
            if (this.vars.el.contains(e.target)) {
                this.open.rooms = true;
                if (!/touched/.test(this.vars.el.className))
                    this.vars.el.className += ' touched';
            }
            else {
                this.open.rooms = false;
            }
        }
        return true;
    };
    HomeComponent.prototype.decodeHTML = function (html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };
    HomeComponent.prototype.onSubmit = function () {
        var self = this, m = self.mdl, k = m.keys, quartos = '', tmp, i, j;
        for (i = 0; i < m.room.people.list.length; i++) {
            tmp = m.room.people.list[i];
            quartos += '&room' + (i + 1) + '=' + tmp.more18;
            if (tmp.less18.total)
                for (j = 0; j < tmp.less18.list.length; j++)
                    quartos += ',' + tmp.less18.list[j].age;
        }
        if (self.open.keys) {
            if (!k.api || !k.cid || !k.secret) {
                alert('Favor inserir token');
                return;
            }
            else {
                self.cookie('cid', k.cid);
                self.cookie('api', k.api);
                self.cookie('secret', k.secret);
                self.open.keys = false;
            }
        }
        if (!m.busca.val || m.busca.regionId === '0' || !m.entrada || !m.saida) {
            alert('Favor preencher todos os campos');
            return;
        }
        else {
            self.cookie('busca-val', m.busca.val);
            self.cookie('busca-img', m.busca.icon);
            self.cookie('busca-id', m.busca.regionId);
            self.cookie('entrada', m.entrada);
            self.cookie('saida', m.saida);
        }
        self.vars.hotelList.HotelListResponse = null;
        self.vars.hotelList.HotelListResponseStr = 'Loading...';
        self.httpC.get('https://s9fcnig6dc.execute-api.us-east-1.amazonaws.com/Test/hotelsavailable?' +
            'cid=' + k.cid +
            '&apiKey=' + k.api +
            '&secret=' + k.secret +
            '&checkin=' + m.entrada +
            '&checkout=' + m.saida +
            '&regionId=' + m.busca.regionId +
            quartos)
            .subscribe(function (hotelList) {
            var h = self.vars.hotelList, tgtComP = 0.13, storeComP = 0.15, gpShare = 0.5, rateInfo, gpShareH, eanNet, hInitialPrice, hInitialCom, hInitialComP, markup, hFinalPrice, storeCom, hFinalCom, hFinalComP;
            h.HotelListResponseStr = JSON.stringify(hotelList);
            h.HotelListResponse = hotelList;
            if (h.HotelListResponse.HotelListResponse) {
                if (h.HotelListResponse.HotelListResponse.EanWsError && h.HotelListResponse.HotelListResponse.EanWsError.presentationMessage) {
                    h.HotelListResponseStr = h.HotelListResponse.HotelListResponse.EanWsError.presentationMessage;
                    h.HotelListResponse = null;
                    return;
                }
                h.HotelListResponse = h.HotelListResponse.HotelListResponse.HotelList.HotelSummary;
                if (!Array.isArray(h.HotelListResponse))
                    h.HotelListResponse = [h.HotelListResponse];
                for (var i = 0; i < h.HotelListResponse.length; ++i)
                    h.HotelListResponse[i].shortDescription = self.decodeHTML(h.HotelListResponse[i].shortDescription);
            }
        }, function (err) {
            var h = self.vars.hotelList;
            h.HotelListResponseStr = 'Erro!';
            h.HotelListResponse = null;
        });
        return;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
            host: {
                '(document:click)': 'onClick($event)',
                '(document:keydown)': 'onKey($event)',
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ng2_completer__["a" /* CompleterService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/regions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomData = (function (_super) {
    __extends(CustomData, _super);
    function CustomData(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    CustomData.prototype.search = function (term) {
        var _this = this;
        this.http.get('https://s9fcnig6dc.execute-api.us-east-1.amazonaws.com/Test/regions?termo=' + term)
            .subscribe(function (ret) {
            var data = ret.json();
            var matches = data.map(function (item) { return _this.convertToItem(item); });
            _this.next(matches);
        }, function (err) {
            var data = JSON.parse('[]');
            var matches = data.map(function (item) { return _this.convertToItem(item); });
            _this.next(matches);
        });
    };
    CustomData.prototype.cancel = function () {
        // Handle cancel
    };
    CustomData.prototype.convertToItem = function (data) {
        var nome = '';
        if (!data) {
            return null;
        }
        nome = !data.regionType ? 'default' :
            (data.level && data.level.indexOf('1') > -1 ? 'lvl1' :
                (data.regionType.indexOf('Point of Interest') > -1 ? 'interest' :
                    (data.regionType.indexOf('Hotel') > -1 ? 'hotel' :
                        (data.regionType.indexOf('Metro') > -1 ? 'train' :
                            (data.regionType.indexOf('Train') > -1 ? 'train' :
                                (data.regionType.indexOf('Airport') > -1 ? 'airport' : 'default'))))));
        // data will be string if an initial value is set
        return {
            title: typeof data === 'string' ? data : data.regionNameLong,
            image: 'assets/img/icons/' + nome + '.png',
            description: data.regionId || data.description || 0,
            originalObject: data
        };
    };
    return CustomData;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]));



/***/ }),

/***/ "../../../../../src/app/range.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RangePipe = (function () {
    function RangePipe() {
    }
    RangePipe.prototype.transform = function (items, quantity) {
        items.length = 0;
        for (var i = 0; i < quantity; i++) {
            items.push(i);
        }
        return items;
    };
    RangePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'range',
            pure: false
        })
    ], RangePipe);
    return RangePipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
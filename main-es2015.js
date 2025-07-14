(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"https://www.agriceng.cloud/\">\n          <img alt=\"AEC\" src=\"assets/agric-eng.jpg\" width=\"40\" height=\"40\">\n        </a>\n      </div>\n    </div>\n  </nav>\n  \n  <div class=\"row\" id=\"content\">\n    <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n        <h3 class=\"page-title\">Agriceng Tunnel Dryer App</h3>\n        <hr class=\"intro-divider aec-divider\" />\n    </div>\n    <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n      <div class=\"panel aec-panel-heading\">\n        <div class=\"panel-heading\">Input</div>\n        <div class=\"panel-body\">\n        <div class=\"row\" id=\"user-input-section\">\n          <div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-12\">\n            <label for=\"exampleFormControlInput1\" class=\"form-label\">Initial mass of material to dry in Kg(ww)</label>\n            <input class=\"form-control\" type=\"number\" [(ngModel)] = \"ww\" name=\"ww\" (ngModelChange)=\"onWwChange($event)\"/>\n          </div>\n          <div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-12\">\n            <label for=\"exampleFormControlInput1\" class=\"form-label\">Initial moisture wet basis (Miwb) %</label>\n            <input class=\"form-control\" type=\"number\" [(ngModel)] = \"miwb\" name=\"miwb\" (ngModelChange)=\"onMiwbChange($event)\"/>\n          </div>\n          <div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-12\">\n            <label for=\"exampleFormControlInput1\" class=\"form-label\">Final moisture wet basis (Mfwb) %</label>\n            <input class=\"form-control\" type=\"number\" [(ngModel)] = \"mfwb\" name=\"mfwb\" (ngModelChange)=\"onMfwbChange($event)\"/>\n          </div>\n          <div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-12\">\n            <label for=\"exampleFormControlInput1\" class=\"form-label\">Wind velocity in m/s</label>\n            <input class=\"form-control\" type=\"number\" [(ngModel)] = \"vc\" name=\"vc\" (ngModelChange)=\"onVcChange($event)\"/>\n          </div>\n          <div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-12\">\n            <label for=\"exampleFormControlInput1\" class=\"form-label\">Ambient Temp in degrees</label>\n            <input class=\"form-control\" type=\"number\" [(ngModel)] = \"atD\" name=\"atD\" (ngModelChange)=\"onAtDChange($event)\"/>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n      <div class=\"panel aec-panel-heading\">\n        <div class=\"panel-heading\">Output</div>\n        <div class=\"panel-body\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col\"></th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td><b>Collector area</b></td>\n                <td><b>{{ca}}</b></td>\n              </tr>\n              <tr>\n                <td><b>Number of chimneys</b></td>\n                <td><b>{{nc}}</b></td>\n              </tr>\n              <tr>\n                <td><b>Surface area of drying beds in m<sup>2</sup></b></td>\n                <td><b>{{ sa }}</b></td>\n              </tr>\n            </tbody>\n            </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n       <div class=\"row\" id=\"data-section\">\n          <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n            <div class=\"row\">\n            <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n              <div class=\"panel aec-panel-heading\">\n                <div class=\"panel-heading\">1. Airflow requirements</div>\n                <div class=\"panel-body\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th scope=\"col\"></th>\n                        <th scope=\"col\"></th>\n                        <th scope=\"col\"></th>\n                        <th scope=\"col\"></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td></td>\n                        <td><b>Temperature Diff</b></td>\n                        <td><b>ΔT</b></td>\n                        <td></td>\n                        <td><b>{{ tempDiff }}</b></td>\n                      </tr>\n                      <tr>\n                        <td></td>\n                        <td>Dimensionless parameter (0.14-0.25)</td>\n                        <td>β</td>\n                        <td>{{ dP }}</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td></td>\n                        <td>Boiling Temp of water in degrees</td>\n                        <td>Tb</td>\n                        <td>{{ tb }}</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td></td>\n                        <td>Freezing Temp water in degrees</td>\n                        <td>Tc</td>\n                        <td>{{ tc }}</td>\n                        <td></td>\n                      </tr>\n                      <tr>\n                        <td></td>\n                        <td>Solar constant</td>\n                        <td>Io</td>\n                        <td>{{ lo }}</td>\n                        <td></td>\n                      </tr>\n                    </tbody>\n                    </table>\n                </div>\n              </div>\n      \n            </div>\n            <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n              <div class=\"row\">\n                <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n                  <div class=\"panel aec-panel-heading\">\n                    <div class=\"panel-heading\">2. Moisture to be removed from food</div>\n                    <div class=\"panel-body\">\n                      <table class=\"table\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td></td>\n                            <td><b>Mass of moisture to be removed in kg</b></td>\n                            <td><b>Mw</b></td>\n                            <td></td>\n                            <td><b>{{ mw }}</b></td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                 \n    \n                </div>\n                <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n                  <div class=\"panel aec-panel-heading\">\n                    <div class=\"panel-heading\">3. Volume of air required to remove the moisture in m<sup>3</sup></div>\n                    <div class=\"panel-body\">\n                      <table class=\"table\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td></td>\n                            <td>Volume of air required</td>\n                            <td>VA</td>\n                            <td></td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Temp of air leaving dry bed in degrees</td>\n                            <td></td>\n                            <td>{{taLD}}</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Temp air leaving dry bed in Kelvins</td>\n                            <td>Tf</td>\n                            <td>{{taLK}}</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Ambient Temp in degrees</td>\n                            <td></td>\n                            <td>{{atD}}</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Ambient Temp in Kelvins</td>\n                            <td>Ta</td>\n                            <td>{{atK}}</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Temp air leaving air heater in degrees = Ta + ΔT</td>\n                            <td></td>\n                            <td>{{ taLD }}</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Temp air leaving air heater in Kelvins</td>\n                            <td>To</td>\n                            <td>{{ to }}</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Partial pressure of dry air in atmosphere</td>\n                            <td>Pa</td>\n                            <td>{{ pa }}</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Specific heat capacity of air at constant pressure</td>\n                            <td>Cpa</td>\n                            <td>{{ cpa }}</td>\n                            <td></td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                  \n    \n                </div>\n              <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n                <div class=\"panel aec-panel-heading\">\n                  <div class=\"panel-heading\">3.10 Enthalpy of vaporization</div>\n                  <div class=\"panel-body\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th scope=\"col\"></th>\n                          <th scope=\"col\"></th>\n                          <th scope=\"col\"></th>\n                          <th scope=\"col\"></th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        \n                        <tr>\n                          <td><b></b></td>\n                          <td><b>Enthalpy of vaporization</b></td>\n                          <td><b>Lt</b></td>\n                          <td><b>{{lt}}</b></td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <td></td>\n                          <td>Specifc gass constant</td>\n                          <td>Ra</td>\n                          <td>{{ ra }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <td></td>\n                          <td>Gass constant of water vapor</td>\n                          <td>Rg</td>\n                          <td>{{ rg }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <td></td>\n                          <td>Boiling point of water in Kelvins</td>\n                          <td>Tb2</td>\n                          <td>{{ tb2 }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <td></td>\n                          <td>Critical pressure of water</td>\n                          <td>Pc</td>\n                          <td>{{ pc }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <td></td>\n                          <td>Temparature of the product Tpt =0.25(3To+Ta)</td>\n                          <td></td>\n                          <td>{{ tp }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <td></td>\n                          <td>Temp of product in Kelvins</td>\n                          <td>Tpt</td>\n                          <td>{{ tpt }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <td></td>\n                          <td>Critical Temp of water in Kelvins</td>\n                          <td>Tc</td>\n                          <td>{{ vtc }}</td>\n                          <td></td>\n                        </tr>\n                      </tbody>\n                      </table>\n                  </div>\n                </div>\n              \n               </div>\n               <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n                <div class=\"panel aec-panel-heading\">\n                  <div class=\"panel-heading\">4. Volume flow rate (Va/t)</div>\n                  <div class=\"panel-body\">\n                    <table class=\"table\">\n                      <thead>\n                        <tr>\n                          <th scope=\"col\"></th>\n                          <th scope=\"col\"></th>\n                          <th scope=\"col\"></th>\n                          <th scope=\"col\"></th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td></td>\n                          <td>Mass flow rate V*1.2</td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <td></td>\n                          <td>Volume of air required to remove the moisture in m3</td>\n                          <td>VA</td>\n                          <td></td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <td></td>\n                          <td>Total drying time (24 hours)</td>\n                          <td>t</td>\n                          <td>{{ t }}</td>\n                          <td></td>\n                        </tr>\n                        <tr>\n                          <td></td>\n                          <td>Density of air</td>\n                          <td>p</td>\n                          <td>{{ p }}</td>\n                          <td></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n                \n               </div>\n  \n               </div>\n            </div>\n           \n            \n         </div>\n\n          </div>\n          \n          <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n              <div class=\"row\">\n                <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n                  <div class=\"panel aec-panel-heading\">\n                    <div class=\"panel-heading\">5. Area for collecting solar energy</div>\n                    <div class=\"panel-body\">\n                      <table class=\"table\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td></td>\n                            <td><b>Collector area</b></td>\n                            <td></td>\n                            <td></td>\n                            <td><b>{{ca}}</b></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Mass of moisture to be removed</td>\n                            <td>Mw</td>\n                            <td>{{ smw }}</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Latent heat of vaporization</td>\n                            <td>Lt</td>\n                            <td>{{ slt }}</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>It intensity of radiation on tilted surface</td>\n                            <td>It</td>\n                            <td>{{sit}}</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Total time</td>\n                            <td>t</td>\n                            <td>{{st}}</td>\n                            <td></td>\n                          </tr>\n                       </tbody>\n                       </table>\n                    </div>\n                  </div>\n                    \n                 </div>\n                 <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n                  <div class=\"panel aec-panel-heading\">\n                    <div class=\"panel-heading\">6. Chimneys</div>\n                    <div class=\"panel-body\">\n                      <table class=\"table\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td></td>\n                            <td><b>Number of chimneys</b></td>\n                            <td></td>\n                            <td></td>\n                            <td><b>{{nc}}</b></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Wind velocity in m/s</td>\n                            <td>Vc</td>\n                            <td>{{vc}}</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Volume flow rate</td>\n                            <td>V</td>\n                            <td>{{ cv }}</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Width of chimney</td>\n                            <td>w</td>\n                            <td>{{ w }}</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Depth of chimney</td>\n                            <td>s</td>\n                            <td>{{ s }}</td>\n                            <td></td>\n                          </tr>\n                        </tbody>\n                        </table>\n                    </div>\n                  </div>\n                 \n\n                 </div>\n                 <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n                  <div class=\"panel aec-panel-heading\">\n                    <div class=\"panel-heading\">7. Area of drying bed</div>\n                    <div class=\"panel-body\">\n                      <table class=\"table\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td></td>\n                            <td><b>Surface area of drying beds in m<sup>2</sup></b></td>\n                            <td><b>Sa</b></td>\n                            <td><b>{{ sa }}</b></td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Loading density</td>\n                            <td></td>\n                            <td>{{ ld }}</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Recommended drying thickness 0.02 m</td>\n                            <td></td>\n                            <td>0.02</td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Bulk density of cassava</td>\n                            <td></td>\n                            <td> {{bd}} </td>\n                            <td></td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td>Mass of cassava to dry</td>\n                            <td>Ww</td>\n                            <td>{{ dww }}</td>\n                            <td></td>\n                          </tr>\n                          \n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                  \n                    \n                 </div>\n              </div>\n          </div>\n       </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#content{\n  margin-top: 80px;\n  background-color: #FFF;\n  border-style: solid;\n  border: 1px double lightgray;\n  padding-top: 30px;\n}\nbody{\n  padding-top: 70px;\n  background-color: #f7f7fa !important;\n  font-family: 'Roboto', sans-serif !important;\n}\n#user-input-section{\n  border-style: solid;\n  border: 1px double lightgray;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n}\n#data-section{\n\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n\n}\n.aec-panel-heading .panel-heading{\n  background-color: #30908e !important;\n  color: #FFF;\n}\n.page-title{\n  color:  #30908e;\n  text-align: center;\n}\n.aec-divider{\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50e1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXI6IDFweCBkb3VibGUgbGlnaHRncmF5O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbmJvZHl7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2ZhICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuI3VzZXItaW5wdXQtc2VjdGlvbntcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyOiAxcHggZG91YmxlIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuI2RhdGEtc2VjdGlvbntcblxuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbn1cbi5hZWMtcGFuZWwtaGVhZGluZyAucGFuZWwtaGVhZGluZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOTA4ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5wYWdlLXRpdGxle1xuICBjb2xvcjogICMzMDkwOGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hZWMtZGl2aWRlcntcbiAgd2lkdGg6IDQwJTtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'malawi';
        // section 1
        this.dP = 0.2;
        this.tb = 100;
        this.tc = 0;
        this.it = 555;
        this.lo = 1367;
        this.tempDiff = Number((2 * this.dP * (this.tb - this.tc) * (this.it / this.lo)).toFixed(1));
        //section 2
        this.ww = 0;
        this.miwb = 0;
        this.mfwb = 0;
        this.mw = 0;
        //section 3
        this.va = 0;
        this.taLK = 304.06;
        this.atD = 27;
        this.atK = this.atD + 273;
        this.taLD = this.atD + (this.tempDiff);
        this.taLHD = 43.2;
        this.to = this.taLD + 273;
        this.pa = 101800.0;
        this.cpa = 1006.0;
        //section 3.10
        this.ra = 286.9;
        this.rg = 461.5;
        this.tb2 = 373;
        this.pc = 22060000;
        this.tp = Number((0.25 * ((3 * this.taLD) + this.atD)).toFixed(2));
        this.tpt = this.tp + 273;
        this.vtc = 650;
        this.lt = Math.round(Number(this.rg * this.vtc * this.tb2) * (Math.log(this.pc / Math.pow(10, 5))) * (Math.pow((this.vtc - this.tpt), 0.38)) / (Math.pow((this.vtc - this.tb2), 1.38)));
        //section 4
        this.v = 0.993831219245376;
        this.mfr = 1.19259746309445;
        this.vam = '';
        this.t = 86400;
        this.p = 1.2;
        //section 5
        this.n = 0.125;
        this.smw = 529.41;
        this.slt = 2.35E+06;
        this.sit = 555;
        this.st = 86400;
        this.ca = Math.round((Number(this.smw * this.slt) / (this.sit * this.st * this.n)));
        //section 6
        this.nc = 0;
        this.vc = 0;
        this.cv = 0.993831219245376;
        this.w = 0.265;
        this.s = 0.3;
        //section 7
        this.dww = this.mw;
        this.dt = 0.02;
        this.bd = 600;
        this.sa = this.bd / (this.bd * this.dt);
        this.ld = (this.dww / this.sa);
    }
    ngOnInit() {
    }
    onWwChange($event) {
        this.calculateMm();
        this.calculateMasOfCassavaToDry();
        this.calculateLoadingDensity();
    }
    calculateMm() {
        this.mw = Number((this.ww * ((this.miwb / 100) - (this.mfwb) / 100) / (1 - (this.mfwb) / 100)).toFixed(2));
    }
    onMiwbChange($event) {
        this.calculateMm();
    }
    onMfwbChange($event) {
        this.calculateMm();
    }
    calculateMasOfCassavaToDry() {
        this.dww = Number(this.ww);
    }
    onNChange($event) {
        this.calculateSolarEnergyCollectionArea();
    }
    calculateSolarEnergyCollectionArea() {
        this.ca = Math.round((this.smw * this.slt) / (this.sit * this.st * this.n));
    }
    calculateLoadingDensity() {
        this.ld = (this.dww / this.sa);
    }
    onVcChange($event) {
        if ($event !== '') {
            this.calculateNumberOfChimneys();
        }
    }
    calculateNumberOfChimneys() {
        this.nc = Math.round(this.cv / (this.w * this.s * this.vc));
    }
    onAtDChange($event) {
        this.calculateAmbientTempInKelvin();
        this.calculateTempOfAirLeavingHeaterInDegrees();
        this.calculateTemparatureOfProduct();
        this.calculateEnthalpyOfVaporization();
    }
    calculateAmbientTempInKelvin() {
        this.atK = Number(this.atD) + 273;
    }
    calculateTempOfAirLeavingHeaterInDegrees() {
        this.taLD = Number(Number(this.atD) + Number(this.tempDiff));
        this.calculateTempOfAirLeavingHeaterInKelvin();
    }
    calculateTempOfAirLeavingHeaterInKelvin() {
        this.to = this.taLD + 273;
    }
    calculateTemparatureOfProduct() {
        this.tp = Number((0.25 * ((3 * this.taLD) + Number(this.atD))).toFixed(2));
        this.calculateTemparatureOfProductInKelvin();
    }
    calculateTemparatureOfProductInKelvin() {
        this.tpt = Number(this.tp) + 273;
    }
    calculateEnthalpyOfVaporization() {
        this.lt = Math.round(Number(this.rg * this.vtc * this.tb2) * (Math.log(this.pc / Math.pow(10, 5))) * (Math.pow((this.vtc - this.tpt), 0.38)) / (Math.pow((this.vtc - this.tb2), 1.38)));
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/felixkiriago/Desktop/Projects/Personal/Angular/malawi/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
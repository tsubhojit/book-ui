function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<div class=\"home-body\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<ngx-ui-loader></ngx-ui-loader>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <hr class=\"footer-line\"/>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-md-12 text-center pb-1\"><em>This demo application is intended for internal purpose only. Images & icons created by freepik - www.freepik.com</em></div>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-toolbar\">\r\n    <a class=\"title-toolbar\" routerLink=\"/home\">\r\n        <img class=\"mr-2\" width=\"40\" alt=\"Logo\" src=\"assets/img/logo.svg\" />\r\n        RHOS-Railway-Reservation\r\n    </a>\r\n    <div class=\"spacer\"></div>\r\n    <div class=\"row options-toolbar\">\r\n        <div class=\"col-6 col-md-6\">\r\n            <span  dropdown>\r\n                <a href id=\"basic-link\" class=\"animate-up\" dropdownToggle (click)=\"false\" aria-controls=\"basic-link-dropdown\">\r\n                    Manage Booking\r\n                </a>\r\n                <ul id=\"basic-link-dropdown\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"basic-link\">\r\n                    <li role=\"menuitem\"><button id=\"bookTicketItem\" #bookTicketItem class=\"dropdown-item\" (click)=\"doOperation(bookTicketItem)\">Book Ticket</button>\r\n                    <li class=\"divider dropdown-divider\"></li>\r\n                    <li role=\"menuitem\"><button id=\"cancelTicketItem\" #cancelTicketItem class=\"dropdown-item\" (click)=\"doOperation(cancelTicketItem)\">Cancel Ticket</button>\r\n                </ul>\r\n            </span>\r\n            \r\n        </div>\r\n        <div class=\"col-6 col-md-6\">\r\n            <button id=\"pnrStatusItem\" #pnrStatusItem class=\"animate-up btn btn-link\" (click)=\"doOperation(pnrStatusItem)\">\r\n                PNR Status\r\n            </button>         \r\n        </div>\r\n    </div>\r\n    <div class=\"spacer\"></div>\r\n    <a aria-label=\"RHOS-Reservation-App-Twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com\"\r\n        title=\"Twitter\">\r\n        <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\"\r\n            viewBox=\"0 0 400 400\">\r\n            <defs>\r\n                <style>\r\n                    .cls-1 {\r\n                        fill: none;\r\n                    }\r\n\r\n                    .cls-2 {\r\n                        fill: #269cc7;\r\n                    }\r\n                </style>\r\n            </defs>\r\n            <rect class=\"cls-1\" width=\"400\" height=\"400\" />\r\n            <path class=\"cls-2\"\r\n                d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\" />\r\n        </svg>\r\n\r\n    </a>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"row home-row\">\r\n        <div class=\"col-8 body-info\">\r\n            <h1>Book your destination right now.</h1>\r\n            <p>A one stop to manage your destination travels.</p>\r\n            <button id=\"book-ticket-btn\" class=\"btn btn-info action-button\" type=\"button\" \r\n            (click)=\"openModal(operationModal,'bookTicketItem')\">Book Ticket</button>\r\n        </div>\r\n        <div class=\"col-4\">\r\n            <img class=\"landing-image\" alt=\"Train Image 1\" src=\"assets/img/travel.svg\" />\r\n        </div>\r\n    </div>\r\n    <app-footer></app-footer>    \r\n</div>\r\n<ng-template #operationModal>\r\n    <div [ngSwitch]=\"eventMessage\">\r\n        <div *ngSwitchCase=\"'cancelTicketItem'\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title pull-left\">Cancel Ticket</h5>\r\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form *ngIf=\"bookingData\">\r\n                    <div *ngIf=\"alertMessage\" class=\"alert alert-danger\" role=\"alert\">\r\n                       {{ alertMessage }}.\r\n                    </div>\r\n                    <fieldset>\r\n                        <div class=\"row mb-2\">\r\n                            <div class=\"col-12\">\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control custom-input\" type=\"text\"  name=\"bookingId\" [(ngModel)]=\"bookingData.bookingId\" required placeholder=\"PNR Number\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                    <input class=\"form-control btn btn-primary btn-sm\" type=\"submit\"  name=\"submit\" (click) =\"cancelTicket(bookingData)\" value=\"Cancel Ticket\">\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div *ngSwitchCase=\"'pnrStatusItem'\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title pull-left\">Get PNR Status</h5>\r\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form *ngIf=\"bookingData\">\r\n                    <div *ngIf=\"alertMessage\" class=\"alert alert-danger\" role=\"alert\">\r\n                        {{ alertMessage }}.\r\n                    </div>\r\n                    <fieldset>\r\n                        <div class=\"row mb-2\">\r\n                            <div class=\"col-12\">\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control custom-input\" type=\"text\"  name=\"bookingId\" [(ngModel)]=\"bookingData.bookingId\" required placeholder=\"PNR Number\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                    <input class=\"form-control btn btn-primary btn-sm\" type=\"submit\"  name=\"submit\" (click) =\"getPnrStatus(bookingData)\" value=\"Get Status\">\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div *ngSwitchDefault>\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title pull-left\">Book Ticket</h5>\r\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form *ngIf=\"bookingData\">\r\n                    <div *ngIf=\"alertMessage\" class=\"alert alert-danger\" role=\"alert\">\r\n                        {{ alertMessage }}.\r\n                    </div>\r\n                    <div *ngIf=\"bookingData.fromStation && bookingData.toStation && bookingData.fromStation === bookingData.toStation\" class=\"alert alert-danger\" role=\"alert\">\r\n                        Journey from and to cannot be the same.\r\n                    </div>\r\n                    <fieldset>\r\n                        <legend class=\"custom-legend\">Journey Details:</legend>\r\n                        <div class=\"row mb-2\">\r\n                            <div class=\"col-6\">\r\n                                <div class=\"input-group\">\r\n                                    <label class=\"sr-only\">From</label>\r\n                                    <select [(ngModel)]=\"bookingData.fromStation\" class=\"form-control custom-input\" id=\"From station\" name=\"fromStation\" required>\r\n                                        <option disabled value>From Station</option>\r\n                                        <option *ngFor=\"let station of rawData.stations\" [ngValue]=\"station\">{{station}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-6\">\r\n                                <div class=\"input-group\">\r\n                                    <label class=\"sr-only\">To</label>\r\n                                    <select [(ngModel)]=\"bookingData.toStation\" class=\"form-control custom-input\" id=\"To station\" name=\"toStation\" required>\r\n                                        <option disabled value>To Station</option>\r\n                                        <option *ngFor=\"let station of rawData.stations\" [ngValue]=\"station\">{{station}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row mb-2\">\r\n                            <div class=\"col-12\">\r\n                                <div class=\"input-group\">\r\n                                    <label class=\"sr-only\">Available Trains</label>\r\n                                    <select [disabled]=\"!((bookingData.fromStation && bookingData.toStation) && (bookingData.fromStation !== bookingData.toStation))\" class=\"form-control custom-input\" id=\"selectedTrain\" name=\"selectedTrain\" required [(ngModel)]=\"bookingData.selectedTrain\">\r\n                                        <option disabled value>Available Trains</option>\r\n                                        <option *ngFor=\"let trainType of rawData.trainTypeList\" [ngValue]=\"trainType\">{{ bookingData.fromStation }} - {{ bookingData.toStation }} {{trainType}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row mb-2\">\r\n                            <div class=\"col-6\">\r\n                                <div class=\"input-group\">\r\n                                    <label class=\"sr-only\">Journey date</label>\r\n                                    <input type=\"text\" placeholder=\"Journey date\" name=\"journeyDate\" [(ngModel)]=\"bookingData.journeyDate\" onfocus=\"this.value=''\" class=\"form-control custom-input\" bsDatepicker>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                    <hr />\r\n                    <fieldset>\r\n                        <legend class=\"custom-legend\">Personal Details:</legend>\r\n                        <div class=\"row mb-2\">\r\n                            <div class=\"col-6\">\r\n                                <div class=\"input-group\">\r\n                                    <label class=\"sr-only\">First Name</label>\r\n                                    <input class=\"form-control custom-input\" type=\"text\" name=\"firstName\" [(ngModel)]=\"bookingData.firstName\" required placeholder=\"First Name\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-6\">\r\n                                <div class=\"input-group\">\r\n                                    <label class=\"sr-only\">Last Name</label>\r\n                                    <input class=\"form-control custom-input\" type=\"text\"  name=\"lastName\" [(ngModel)]=\"bookingData.lastName\" required placeholder=\"Last Name\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row mb-2\">\r\n                            <div class=\"col-12\">\r\n                                <div class=\"input-group\">\r\n                                    <label class=\"sr-only\">Email</label>\r\n                                    <input class=\"form-control custom-input\" type=\"email\" name=\"email\" [(ngModel)]=\"bookingData.email\" required placeholder=\"Email\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                    <input class=\"form-control btn btn-primary btn-sm\" type=\"submit\"  name=\"submit\" (click) =\"bookTicket(bookingData)\" value=\"Book My Ticket\">\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>        \r\n</ng-template>\r\n<ng-template #resultModal>\r\n    <div class=\"modal-body text-center\">\r\n        <div *ngIf=\"!errorFlag; else failureMessage\">\r\n            <div [ngSwitch]=\"eventMessage\">\r\n                <div *ngSwitchCase=\"'pnrStatusItem'\">\r\n                    <h4>PNR Status</h4>\r\n                    <hr />\r\n                    <p>Status : {{ bookingData.pnrStatus }}</p>\r\n                </div>\r\n                <div *ngSwitchCase=\"'cancelTicketItem'\">\r\n                    <h4>Cancelled</h4>\r\n                    <hr />\r\n                    <p>Your ticket has been cancelled successfully.</p>\r\n                </div>\r\n                <div *ngSwitchDefault>\r\n                    <h4>Confirmed</h4>\r\n                    <hr />\r\n                    <p>Your ticket has been booked successfully.</p>\r\n                    <div>\r\n                        <p><strong>Ticket No : {{ bookingData.ticketNo }}</strong></p>\r\n                        <p><strong>PNR No : {{ bookingData.bookingId }}</strong></p>\r\n                        <p><strong>PNR Status : {{ bookingData.pnrStatus }}</strong></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ng-template #failureMessage>\r\n            <div [ngSwitch]=\"eventMessage\">\r\n                <div *ngSwitchCase=\"'pnrStatusItem'\">\r\n                    <h4>{{ resultMessage ? resultMessage : 'Failed' }}</h4>\r\n                    <hr />\r\n                    <p>Please Try again.</p>\r\n                </div>\r\n                <div *ngSwitchCase=\"'cancelTicketItem'\">\r\n                    <h4>{{ resultMessage ? resultMessage : 'Cancellation Failed' }}</h4>\r\n                    <hr />\r\n                    <p>Please Try again.</p>\r\n                </div>\r\n                <div *ngSwitchDefault>\r\n                    <h4>Booking Failed</h4>\r\n                    <hr />\r\n                    <p>Please Try again.</p>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n        <button [ngClass]=\"{'form-control': true, 'btn': true, 'btn-success': !errorFlag, 'btn-danger': errorFlag }\" \r\n        (click)=\"closeModal()\"><span>Close</span></button>\r\n    </div>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'rhos-reservation-app-ui';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _common_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common/header/header.component */
    "./src/app/common/header/header.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./common/footer/footer.component */
    "./src/app/common/footer/footer.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _services_data_service_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/data-service/data.service */
    "./src/app/services/data-service/data.service.ts");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_api_service_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/api-service/api.service */
    "./src/app/services/api-service/api.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");

    var ngxUiLoaderConfig = {
      bgsColor: '#36b7dd',
      bgsOpacity: 0.5,
      bgsPosition: 'bottom-right',
      bgsSize: 60,
      bgsType: 'ball-spin-clockwise',
      blur: 5,
      delay: 0,
      fgsColor: '#36b7dd',
      fgsPosition: 'center-center',
      fgsSize: 60,
      fgsType: 'circle',
      gap: 24,
      logoPosition: 'center-center',
      logoSize: 120,
      logoUrl: '',
      masterLoaderId: 'master',
      overlayBorderRadius: '0',
      overlayColor: 'rgba(40, 40, 40, 0.5)',
      pbColor: '#36b7dd',
      pbDirection: 'ltr',
      pbThickness: 5,
      hasProgressBar: true,
      text: '',
      textColor: '#FFFFFF',
      textPosition: 'center-center',
      maxTime: -1,
      minTime: 500
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _common_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(), ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig)],
      providers: [_services_data_service_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"], _services_api_service_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/common/footer/footer.component.css":
  /*!****************************************************!*\
    !*** ./src/app/common/footer/footer.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/common/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/common/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppCommonFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/common/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/common/header/header.component.css":
  /*!****************************************************!*\
    !*** ./src/app/common/header/header.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/common/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/common/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppCommonHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data-service/data.service */
    "./src/app/services/data-service/data.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(data) {
        _classCallCheck(this, HeaderComponent);

        this.data = data;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.data.currentEventMessage.subscribe(function (eventMessage) {
            _this.eventMessage = eventMessage;
          });
        }
      }, {
        key: "doOperation",
        value: function doOperation(element) {
          this.data.sendClickEvent(element.id);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: src_app_services_data_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/common/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/models/booking-data.ts":
  /*!****************************************!*\
    !*** ./src/app/models/booking-data.ts ***!
    \****************************************/

  /*! exports provided: BookingData */

  /***/
  function srcAppModelsBookingDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingData", function () {
      return BookingData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var BookingData = function BookingData() {
      _classCallCheck(this, BookingData);

      this.bookingId = window.crypto.getRandomValues(new Uint32Array(1))[0].toString();
      this.ticketNo = new Date().getTime().toString();
    };
    /***/

  },

  /***/
  "./src/app/models/raw-data.ts":
  /*!************************************!*\
    !*** ./src/app/models/raw-data.ts ***!
    \************************************/

  /*! exports provided: RawData */

  /***/
  function srcAppModelsRawDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RawData", function () {
      return RawData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var RawData = function RawData() {
      _classCallCheck(this, RawData);

      this.stations = ['Kolkata', 'Hyderabad', 'Mumbai', 'Chennai', 'Pune'];
      this.trainTypeList = ['Intercity', 'Maitri', 'SuperMail', 'Intergallop'];
    };
    /***/

  },

  /***/
  "./src/app/pages/home/home.component.css":
  /*!***********************************************!*\
    !*** ./src/app/pages/home/home.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var src_app_services_data_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data-service/data.service */
    "./src/app/services/data-service/data.service.ts");
    /* harmony import */


    var src_app_models_raw_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/raw-data */
    "./src/app/models/raw-data.ts");
    /* harmony import */


    var src_app_models_booking_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/booking-data */
    "./src/app/models/booking-data.ts");
    /* harmony import */


    var src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/api-service/api.service */
    "./src/app/services/api-service/api.service.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(modalService, data, apiService, ngxService) {
        _classCallCheck(this, HomeComponent);

        this.modalService = modalService;
        this.data = data;
        this.apiService = apiService;
        this.ngxService = ngxService;
        this.bsInlineValue = new Date();
        this.maxDate = new Date();
        this.config = {
          animated: true,
          "class": 'modal-dialog-centered',
          backdrop: true,
          ignoreBackdropClick: true,
          keyboard: false
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.rawData = new src_app_models_raw_data__WEBPACK_IMPORTED_MODULE_4__["RawData"]();
          this.maxDate.setDate(this.maxDate.getDate() + 1000);
          this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
          this.errorFlag = false;
          this.data.currentEventMessage.subscribe(function (eventMessage) {
            _this2.eventMessage = eventMessage;

            if (_this2.eventMessage) {
              _this2.openModal(_this2.operationModal);
            }
          });
        }
      }, {
        key: "openModal",
        value: function openModal(template, eventMessage) {
          this.eventMessage = eventMessage ? eventMessage : this.eventMessage;
          this.bookingData = new src_app_models_booking_data__WEBPACK_IMPORTED_MODULE_5__["BookingData"]();
          this.bookingData.fromStation = this.bookingData.toStation = this.bookingData.selectedTrain = '';

          if (this.eventMessage === 'cancelTicketItem' || this.eventMessage === 'pnrStatusItem') {
            this.bookingData.ticketNo = '';
            this.bookingData.bookingId = '';
          }

          this.modalRef = this.modalService.show(template, this.config);
        }
      }, {
        key: "openConfirmationModal",
        value: function openConfirmationModal(template) {
          this.modalRef = this.modalService.show(template, this.config);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          // this.resetBookingData();
          this.alertMessage = '';
          this.modalRef.hide();
        }
      }, {
        key: "bookTicket",
        value: function bookTicket(bookingData) {
          var _this3 = this;

          this.ngxService.start();
          this.errorFlag = false;
          var message = this.validateBookingdata(bookingData);

          if (!message) {
            this.alertMessage = '';
            this.apiService.saveBookingData(bookingData).subscribe(function (data) {
              _this3.bookingData = data;
            }, function (error) {
              _this3.errorFlag = true;
            }, function () {}).add(function () {
              _this3.ngxService.stop();

              _this3.closeModal();

              _this3.openConfirmationModal(_this3.resultModal);
            });
          } else {
            this.alertMessage = message;
            this.ngxService.stop();
          }
        }
      }, {
        key: "cancelTicket",
        value: function cancelTicket(bookingData) {
          var _this4 = this;

          this.ngxService.start();
          this.errorFlag = false;
          var message = this.validateBookingdata(bookingData);

          if (!message) {
            this.alertMessage = '';
            this.apiService.cancelBooking(bookingData.bookingId).subscribe(function (data) {
              _this4.bookingData = data;
            }, function (error) {
              _this4.errorFlag = true;
            }, function () {}).add(function () {
              if (!_this4.bookingData) {
                _this4.errorFlag = true;
                _this4.resultMessage = 'PNR number does not exist.';
              }

              _this4.ngxService.stop();

              _this4.closeModal();

              _this4.openConfirmationModal(_this4.resultModal);
            });
          } else {
            this.alertMessage = message;
            this.ngxService.stop();
          }
        }
      }, {
        key: "getPnrStatus",
        value: function getPnrStatus(bookingData) {
          var _this5 = this;

          this.ngxService.start();
          this.errorFlag = false;
          var message = this.validateBookingdata(bookingData);

          if (!message) {
            this.alertMessage = '';
            this.apiService.getPnrStatus(bookingData.bookingId).subscribe(function (data) {
              _this5.bookingData = data;
            }, function (error) {
              _this5.errorFlag = true;
            }, function () {}).add(function () {
              if (!_this5.bookingData) {
                _this5.errorFlag = true;
                _this5.resultMessage = 'PNR number does not exist.';
              }

              _this5.ngxService.stop();

              _this5.closeModal();

              _this5.openConfirmationModal(_this5.resultModal);
            });
          } else {
            this.alertMessage = message;
            this.ngxService.stop();
          }
        }
      }, {
        key: "validateBookingdata",
        value: function validateBookingdata(bookingData) {
          var validationMessage;

          if (+bookingData.bookingId === 0) {
            validationMessage = 'Please enter a valid PNR number';
          } else if ((this.eventMessage === 'cancelTicketItem' || this.eventMessage === 'pnrStatusItem') && isNaN(+bookingData.bookingId)) {
            validationMessage = 'Please enter a valid PNR number';
          } else if (!(this.eventMessage === 'cancelTicketItem' || this.eventMessage === 'pnrStatusItem') && !(bookingData.fromStation && bookingData.toStation && bookingData.selectedTrain && bookingData.journeyDate && bookingData.firstName && bookingData.lastName && bookingData.email)) {
            validationMessage = 'Please enter the required information';
          }

          return validationMessage;
        }
      }, {
        key: "resetBookingData",
        value: function resetBookingData() {
          this.bookingData = null;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: src_app_services_data_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('operationModal', {
      "static": false
    })], HomeComponent.prototype, "operationModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('resultModal', {
      "static": false
    })], HomeComponent.prototype, "resultModal", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/pages/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/services/api-service/api.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/api-service/api.service.ts ***!
    \*****************************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    var ApiService = /*#__PURE__*/function () {
      function ApiService(httpClient) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
        this.API_URL = 'https://book-api-rail-ticket-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud';
      }

      _createClass(ApiService, [{
        key: "saveBookingData",
        value: function saveBookingData(bookingData) {
          return this.httpClient.post("".concat(this.API_URL, "/manageBooking/bookTickets?") + "bookingId=" + bookingData.bookingId + "&ticketNo=" + bookingData.ticketNo + "&journeyFrom=" + bookingData.fromStation + "&journeyTo=" + bookingData.toStation + "&fromDate=" + bookingData.journeyDate + "&toDate=" + bookingData.journeyDate + "&trainName=" + bookingData.selectedTrain + "&firstName=" + bookingData.firstName + "&lastName=" + bookingData.lastName + "&email=" + bookingData.email, httpOptions);
        }
      }, {
        key: "cancelBooking",
        value: function cancelBooking(bookingId) {
          return this.httpClient.post("".concat(this.API_URL, "/manageBooking/cancelBooking?") + "bookingId=" + bookingId, httpOptions);
        }
      }, {
        key: "getPnrStatus",
        value: function getPnrStatus(bookingId) {
          return this.httpClient.get("".concat(this.API_URL, "/pnrInquiry/getPNRStatus?") + "bookingId=" + bookingId, httpOptions);
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/services/data-service/data.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/data-service/data.service.ts ***!
    \*******************************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataService = /*#__PURE__*/function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.eventMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currentEventMessage = this.eventMessage.asObservable();
      }

      _createClass(DataService, [{
        key: "sendClickEvent",
        value: function sendClickEvent(message) {
          this.eventMessage.next(message);
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      ENV_API_URL: "http://localhost:8080"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\book-ui\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
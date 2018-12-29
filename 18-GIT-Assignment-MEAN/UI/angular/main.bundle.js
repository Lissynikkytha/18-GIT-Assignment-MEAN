webpackJsonp([1,4],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(295);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmployeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddEmployeeComponent = (function () {
    function AddEmployeeComponent(route, router) {
        this.route = route;
        this.router = router;
        this.employee = {
            id: null,
            empName: null,
            empAge: null,
            empEmail: null
        };
        this.employeeList = [];
        this.localdata = [];
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.empId = this.route.params['_value']['id'];
        if (this.empId) {
            var existingVal = JSON.parse(localStorage.getItem('Employee'));
            var keyVal = 0;
            existingVal.forEach(function (item, index) {
                if (item.id == _this.empId) {
                    keyVal = index;
                }
                ;
            });
            this.employee = existingVal[keyVal];
        }
    };
    AddEmployeeComponent.prototype.saveCancel = function () {
        this.router.navigate(['employees']);
    };
    AddEmployeeComponent.prototype.saveEmployee = function (newEmployee) {
        var _this = this;
        if (newEmployee.id) {
            var allEmpl = JSON.parse(localStorage.getItem('Employee'));
            var e = allEmpl.map(function (item) {
                if (item.id == _this.empId) {
                    item.empName = newEmployee.empName;
                    item.empAge = newEmployee.empAge;
                    item.empEmail = newEmployee.empEmail;
                }
                return item;
            });
            localStorage.setItem("Employee", JSON.stringify(e));
            this.router.navigate(['employees']);
        }
        else {
            var localVal = localStorage.getItem("Employee");
            if (localVal) {
                var existingList = JSON.parse(localVal);
                newEmployee.id = existingList.length + 1;
                existingList.push(newEmployee);
                localStorage.setItem("Employee", JSON.stringify(existingList));
            }
            else {
                newEmployee.id = 1;
                var employeeLists = [newEmployee];
                localStorage.setItem("Employee", JSON.stringify(employeeLists));
            }
            this.router.navigate(['employees']);
        }
    };
    AddEmployeeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-add-employee',
            template: __webpack_require__(519),
            styles: [__webpack_require__(515)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
    var _a, _b;
}());
//# sourceMappingURL=add-employee.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        if (JSON.parse(localStorage.getItem('Employee'))) {
            this.employeeList = JSON.parse(localStorage.getItem('Employee'));
        }
    };
    EmployeeListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-employee-list',
            template: __webpack_require__(520),
            styles: [__webpack_require__(516)]
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
//# sourceMappingURL=employee-list.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 337;


/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(459);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(518),
            styles: [__webpack_require__(514)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routing_app_routing__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_add_employee_add_employee_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_employee_list_employee_list_component__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_add_employee_add_employee_component__["a" /* AddEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_employee_list_employee_list_component__["a" /* EmployeeListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__routing_app_routing__["a" /* AppRoute */]),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_add_employee_add_employee_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_employee_list_employee_list_component__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoute; });


var AppRoute = [
    {
        path: '', redirectTo: 'new', pathMatch: 'full'
    },
    {
        path: 'new',
        component: __WEBPACK_IMPORTED_MODULE_0__components_add_employee_add_employee_component__["a" /* AddEmployeeComponent */]
    },
    {
        path: 'employees',
        component: __WEBPACK_IMPORTED_MODULE_1__components_employee_list_employee_list_component__["a" /* EmployeeListComponent */]
    },
    {
        path: 'employee/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__components_add_employee_add_employee_component__["a" /* AddEmployeeComponent */]
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 459:
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" style=\"background-color: darkblue\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"new\" style=\"color:#FFF !important\">Workout Tracker App</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"employees\">Employees</a></li>\n        <li><a routerLink=\"new\">AddEmployee</a></li>\n      </ul>\n    </div>\n  </nav>\n  <div class=\"content\">\n        <router-outlet></router-outlet>\n  </div>\n\n"

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "    <h2 class=\"text-center content_head\"> {{ empId ? \"Edit Employee\" : \"Add Employee\" }}</h2>\n    <form class=\"form-horizontal\" #employeeForm=\"ngForm\" (ngSubmit)=\"saveEmployee(employee)\">\n      <div class=\"form-group\" [class.has-error]=\"empName.invalid && empName.touched\"\n        [class.has-success]=\"empName.valid\">\n        <label for=\"empName\" class=\"col-sm-2 control-label\" >Name</label>\n        <div class=\"col-sm-10\">\n          <input class=\"form-control\" id=\"empName\" name=\"empName\" type=\"text\" [(ngModel)]=\"employee.empName\"\n           #empName=\"ngModel\" placeholder=\"Name\" autocomplete=\"off\" required>\n        </div>\n      </div>\n      <div class=\"form-group\" [class.has-error]=\"empAge.invalid && empAge.touched\"\n      [class.has-success]=\"empAge.valid\">\n          <label for=\"empAge\" class=\"col-sm-2 control-label\" >Age</label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\" id=\"empAge\" name=\"empAge\" type=\"number\" [(ngModel)]=\"employee.empAge\"\n            #empAge=\"ngModel\" placeholder=\"Age\" required>\n          </div>\n      </div>\n      <div class=\"form-group\" [class.has-error]=\"empEmail.invalid && empEmail.touched\"\n      [class.has-success]=\"empEmail.valid\">\n          <label for=\"empEmail\" class=\"col-sm-2 control-label\" >Email</label>\n          <div class=\"col-sm-10\">\n            <input class=\"form-control\" id=\"empEmail\" name=\"empEmail\" type=\"email\" [(ngModel)]=\"employee.empEmail\"\n            #empEmail=\"ngModel\" placeholder=\"Email\" autocomplete=\"off\" required>\n          </div>\n      </div>\n      <div class=\"btn-center\">\n        <button type=\"submit\" *ngIf=\"!employee.id\" class=\"btn btn-primary\" [disabled]=\"employeeForm.invalid\">Add</button>\n        <button type=\"submit\" *ngIf=\"employee.id\" class=\"btn btn-primary\" [disabled]=\"employeeForm.invalid\">Update</button>\n        <button type=\"button\" class=\"btn btn-default\" style=\"margin-left: 1%;\" (click)=\"saveCancel()\">Cancel</button>\n      </div>\n    </form>\n "

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center content_head\"> Employee List </h2>\n<table class=\"table\" border=\"1\">\n    <thead>\n      <tr>\n        <th>Action</th>\n        <th>Name</th>\n        <th>Age</th>\n        <th>Email</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let emplist of employeeList\">\n        <td><button class=\"btn btn-primary\"[routerLink]=\"['/employee', emplist.id]\">Edit</button></td>\n        <td>{{emplist.empName}}</td>\n        <td>{{emplist.empAge}}</td>\n        <td>{{emplist.empEmail}}</td>\n      </tr>    \n    </tbody>\n  </table>\n"

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(338);


/***/ })

},[553]);
//# sourceMappingURL=main.bundle.js.map
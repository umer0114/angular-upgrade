(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@angular/core", "@angular/router", "@angular/common", "./phone-detail/phone-detail.component", "./phone-list/phone-list.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppRoutingModule = void 0;
    const tslib_1 = require("tslib");
    const core_1 = require("@angular/core");
    const router_1 = require("@angular/router");
    const common_1 = require("@angular/common");
    const phone_detail_component_1 = require("./phone-detail/phone-detail.component");
    const phone_list_component_1 = require("./phone-list/phone-list.component");
    const routes = [
        { path: '', redirectTo: 'phones', pathMatch: 'full' },
        { path: 'phones', component: phone_list_component_1.PhoneListComponent },
        { path: 'phones/:phoneId', component: phone_detail_component_1.PhoneDetailComponent }
    ];
    let AppRoutingModule = class AppRoutingModule {
    };
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: '!' },
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            ]
        })
    ], AppRoutingModule);
    exports.AppRoutingModule = AppRoutingModule;
});
//# sourceMappingURL=app-routing.module.js.map
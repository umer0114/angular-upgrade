(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@angular/upgrade/static", "@angular/core", "../core/phone/phone.service", "../ajs-upgraded-providers"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PhoneDetailComponent = void 0;
    const tslib_1 = require("tslib");
    const static_1 = require("@angular/upgrade/static");
    const core_1 = require("@angular/core");
    const phone_service_1 = require("../core/phone/phone.service");
    const ajs_upgraded_providers_1 = require("../ajs-upgraded-providers");
    let PhoneDetailComponent = class PhoneDetailComponent {
        constructor(routeParams, phone) {
            phone.get(routeParams['phoneId']).subscribe(phone => {
                this.phone = phone;
                this.setImage(phone.images[0]);
            });
        }
        setImage(imageUrl) {
            this.mainImageUrl = imageUrl;
        }
    };
    PhoneDetailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'phone-detail',
            templateUrl: './phone-detail.template.html',
        }),
        tslib_1.__metadata("design:paramtypes", [ajs_upgraded_providers_1.RouteParams, phone_service_1.Phone])
    ], PhoneDetailComponent);
    exports.PhoneDetailComponent = PhoneDetailComponent;
    angular.module('phoneDetail')
        .directive('phoneDetail', static_1.downgradeComponent({ component: PhoneDetailComponent }));
});
//# sourceMappingURL=phone-detail.component.js.map
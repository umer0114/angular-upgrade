(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@angular/upgrade/static", "@angular/core", "../core/phone/phone.service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    const static_1 = require("@angular/upgrade/static");
    const core_1 = require("@angular/core");
    const phone_service_1 = require("../core/phone/phone.service");
    let PhoneListComponent = class PhoneListComponent {
        constructor(phone) {
            phone.query().subscribe(phones => {
                this.phones = phones;
            });
            this.orderProp = 'age';
        }
        getPhones() {
            return this.sortPhones(this.filterPhones(this.phones));
        }
        filterPhones(phones) {
            if (phones && this.query) {
                return phones.filter(phone => {
                    let name = phone.name.toLowerCase();
                    let snippet = phone.snippet.toLowerCase();
                    return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
                });
            }
            return phones;
        }
        sortPhones(phones) {
            if (phones && this.orderProp) {
                return phones
                    .slice(0) // Make a copy
                    .sort((a, b) => {
                    if (a[this.orderProp] < b[this.orderProp]) {
                        return -1;
                    }
                    else if ([b[this.orderProp] < a[this.orderProp]]) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            }
            return phones;
        }
    };
    PhoneListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'phone-list',
            templateUrl: './phone-list.template.html'
        }),
        tslib_1.__metadata("design:paramtypes", [phone_service_1.Phone])
    ], PhoneListComponent);
    exports.PhoneListComponent = PhoneListComponent;
    angular.module('phoneList')
        .directive('phoneList', static_1.downgradeComponent({ component: PhoneListComponent }));
});
//# sourceMappingURL=phone-list.component.js.map
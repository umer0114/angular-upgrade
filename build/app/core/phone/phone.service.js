(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@angular/core", "@angular/common/http"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Phone = void 0;
    const tslib_1 = require("tslib");
    const core_1 = require("@angular/core");
    const http_1 = require("@angular/common/http");
    let Phone = class Phone {
        constructor(http) {
            this.http = http;
        }
        query() {
            return this.http.get(`phones/phones.json`);
        }
        get(id) {
            return this.http.get(`phones/${id}.json`);
        }
    };
    Phone = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], Phone);
    exports.Phone = Phone;
});
//# sourceMappingURL=phone.service.js.map
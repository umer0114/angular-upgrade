(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@angular/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    const core_1 = require("@angular/core");
    let CheckmarkPipe = class CheckmarkPipe {
        transform(input) {
            return input ? '\u2713' : '\u2718';
        }
    };
    CheckmarkPipe = tslib_1.__decorate([
        core_1.Pipe({ name: 'checkmark' })
    ], CheckmarkPipe);
    exports.CheckmarkPipe = CheckmarkPipe;
});
//# sourceMappingURL=checkmark.pipe.js.map
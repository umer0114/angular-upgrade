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
    exports.AppComponent = void 0;
    const tslib_1 = require("tslib");
    const core_1 = require("@angular/core");
    let AppComponent = class AppComponent {
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'phonecat-app',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map
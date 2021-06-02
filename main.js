(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/platform-browser-dynamic", "./app/app.module", "@angular/upgrade/static"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
    const app_module_1 = require("./app/app.module");
    // errors.ts:30 ERROR Error: AngularJS v1.x is not loaded!
    const static_1 = require("@angular/upgrade/static");
    static_1.setAngularLib(angular);
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
});
//# sourceMappingURL=main.js.map
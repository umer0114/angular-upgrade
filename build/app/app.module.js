(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@angular/core", "@angular/platform-browser", "@angular/common/http", "./core/phone/phone.service", "@angular/forms", "./phone-list/phone-list.component", "./phone-detail/phone-detail.component", "./core/checkmark/checkmark.pipe", "./app-routing.module", "./app.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppModule = void 0;
    const tslib_1 = require("tslib");
    const core_1 = require("@angular/core");
    const platform_browser_1 = require("@angular/platform-browser");
    const http_1 = require("@angular/common/http");
    const phone_service_1 = require("./core/phone/phone.service");
    const forms_1 = require("@angular/forms");
    const phone_list_component_1 = require("./phone-list/phone-list.component");
    const phone_detail_component_1 = require("./phone-detail/phone-detail.component");
    const checkmark_pipe_1 = require("./core/checkmark/checkmark.pipe");
    const app_routing_module_1 = require("./app-routing.module");
    const app_component_1 = require("./app.component");
    let AppModule = class AppModule {
    };
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                phone_service_1.Phone
            ],
            declarations: [
                app_component_1.AppComponent,
                phone_list_component_1.PhoneListComponent,
                phone_detail_component_1.PhoneDetailComponent,
                checkmark_pipe_1.CheckmarkPipe
            ],
            entryComponents: [
                phone_list_component_1.PhoneListComponent,
                phone_detail_component_1.PhoneDetailComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map
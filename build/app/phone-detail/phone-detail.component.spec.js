(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/router", "rxjs", "@angular/core/testing", "./phone-detail.component", "../core/phone/phone.service", "../core/checkmark/checkmark.pipe"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // #docregion
    // #docregion activatedroute
    const router_1 = require("@angular/router");
    // #enddocregion activatedroute
    const rxjs_1 = require("rxjs");
    const testing_1 = require("@angular/core/testing");
    const phone_detail_component_1 = require("./phone-detail.component");
    const phone_service_1 = require("../core/phone/phone.service");
    const checkmark_pipe_1 = require("../core/checkmark/checkmark.pipe");
    function xyzPhoneData() {
        return {
            name: 'phone xyz',
            snippet: '',
            images: ['image/url1.png', 'image/url2.png']
        };
    }
    class MockPhone {
        get(id) {
            return rxjs_1.of(xyzPhoneData());
        }
    }
    // #docregion activatedroute
    class ActivatedRouteMock {
        constructor(snapshot) {
            this.snapshot = snapshot;
        }
    }
    // #enddocregion activatedroute
    describe('PhoneDetailComponent', () => {
        // #docregion activatedroute
        beforeEach(testing_1.async(() => {
            testing_1.TestBed.configureTestingModule({
                declarations: [checkmark_pipe_1.CheckmarkPipe, phone_detail_component_1.PhoneDetailComponent],
                providers: [
                    { provide: phone_service_1.Phone, useClass: MockPhone },
                    { provide: router_1.ActivatedRoute, useValue: new ActivatedRouteMock({ params: { 'phoneId': 1 } }) }
                ]
            })
                .compileComponents();
        }));
        // #enddocregion activatedroute
        it('should fetch phone detail', () => {
            const fixture = testing_1.TestBed.createComponent(phone_detail_component_1.PhoneDetailComponent);
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h1').textContent).toContain(xyzPhoneData().name);
        });
    });
});
//# sourceMappingURL=phone-detail.component.spec.js.map
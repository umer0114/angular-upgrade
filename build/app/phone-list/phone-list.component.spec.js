(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/router", "rxjs", "@angular/core/testing", "@angular/common/testing", "./phone-list.component", "../core/phone/phone.service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* tslint:disable */
    // #docregion
    const core_1 = require("@angular/core");
    const router_1 = require("@angular/router");
    const rxjs_1 = require("rxjs");
    const testing_1 = require("@angular/core/testing");
    const testing_2 = require("@angular/common/testing");
    const phone_list_component_1 = require("./phone-list.component");
    const phone_service_1 = require("../core/phone/phone.service");
    class ActivatedRouteMock {
        constructor(snapshot) {
            this.snapshot = snapshot;
        }
    }
    class MockPhone {
        query() {
            return rxjs_1.of([
                { name: 'Nexus S', snippet: '', images: [] },
                { name: 'Motorola DROID', snippet: '', images: [] }
            ]);
        }
    }
    let fixture;
    describe('PhoneList', () => {
        beforeEach(testing_1.async(() => {
            testing_1.TestBed.configureTestingModule({
                declarations: [phone_list_component_1.PhoneListComponent],
                providers: [
                    { provide: router_1.ActivatedRoute, useValue: new ActivatedRouteMock({ params: { 'phoneId': 1 } }) },
                    { provide: Location, useClass: testing_2.SpyLocation },
                    { provide: phone_service_1.Phone, useClass: MockPhone },
                ],
                schemas: [core_1.NO_ERRORS_SCHEMA]
            })
                .compileComponents();
        }));
        beforeEach(() => {
            fixture = testing_1.TestBed.createComponent(phone_list_component_1.PhoneListComponent);
        });
        it('should create "phones" model with 2 phones fetched from xhr', () => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelectorAll('.phone-list-item').length).toBe(2);
            expect(compiled.querySelector('.phone-list-item:nth-child(1)').textContent).toContain('Motorola DROID');
            expect(compiled.querySelector('.phone-list-item:nth-child(2)').textContent).toContain('Nexus S');
        });
        xit('should set the default value of orderProp model', () => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('select option:last-child').selected).toBe(true);
        });
    });
});
//# sourceMappingURL=phone-list.component.spec.js.map
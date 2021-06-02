(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core/testing", "@angular/common/http/testing", "./phone.service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const testing_1 = require("@angular/core/testing");
    const testing_2 = require("@angular/common/http/testing");
    const phone_service_1 = require("./phone.service");
    describe('Phone', function () {
        let phone;
        let phonesData = [
            { name: 'Phone X', snippet: '', images: [] },
            { name: 'Phone Y', snippet: '', images: [] },
            { name: 'Phone Z', snippet: '', images: [] }
        ];
        let httpMock;
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    testing_2.HttpClientTestingModule
                ],
                providers: [
                    phone_service_1.Phone,
                ]
            });
        });
        beforeEach(testing_1.inject([testing_2.HttpTestingController, phone_service_1.Phone], (_httpMock_, _phone_) => {
            httpMock = _httpMock_;
            phone = _phone_;
        }));
        afterEach(() => {
            httpMock.verify();
        });
        it('should fetch the phones data from `/phones/phones.json`', () => {
            phone.query().subscribe(result => {
                expect(result).toEqual(phonesData);
            });
            const req = httpMock.expectOne(`/phones/phones.json`);
            req.flush(phonesData);
        });
    });
});
//# sourceMappingURL=phone.service.spec.js.map
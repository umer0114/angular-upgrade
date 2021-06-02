(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./checkmark.pipe"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const checkmark_pipe_1 = require("./checkmark.pipe");
    describe('CheckmarkPipe', function () {
        it('should convert boolean values to unicode checkmark or cross', function () {
            const checkmarkPipe = new checkmark_pipe_1.CheckmarkPipe();
            expect(checkmarkPipe.transform(true)).toBe('\u2713');
            expect(checkmarkPipe.transform(false)).toBe('\u2718');
        });
    });
});
//# sourceMappingURL=checkmark.filter.spec.js.map
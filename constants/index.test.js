var b = require('@timelaps/batterie');
var constants = require('.');
var forOwn = require('@timelaps/n/for/own');
b.describe('constants', function () {
    b.expect(constants).toBeObject();
    b.it('only has numbers', function (t) {
        forOwn(constants, function (value) {
            t.expect(value).toBeNumber();
        });
    }, 15);
});
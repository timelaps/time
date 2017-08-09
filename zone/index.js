var time = require('../make');
var isUndefined = require('@timelaps/is/undefined');
var current = -(time().getTimezoneOffset() / 60);
module.exports = function (zone) {
    return (current = isUndefined(zone) ? current : zone);
};
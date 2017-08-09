module.exports = timeNumber;
var toNumber = require('@timelaps/hacks/to-number');
var time = require('../make');

function timeNumber() {
    return toNumber(time());
}
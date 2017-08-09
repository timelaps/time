var toArray = require('@timelaps/to/array');
var customUnits = require('@timelaps/string/units/custom');
var cacheable = require('@timelaps/fn/cacheable');
var TIME_CONSTANTS = require('../constants');
var reduce = require('@timelaps/array/reduce');
var toNumber = require('@timelaps/hacks/to-number');
var timeUnits = [];
var timeUnitToNumber = reduce(TIME_CONSTANTS, function (memo, number, unit) {
    timeUnits.push(unit);
    memo[unit] = function (input) {
        return input * number;
    };
}, {});
module.exports = cacheable(function (number_) {
    var splits = toArray(number_ + '', ',');
    return reduce(splits, function (time, num_) {
        var num = num_,
            unit = customUnits(num, timeUnits),
            handler = timeUnitToNumber[unit],
            number = toNumber(num.split(unit).join(''));
        // there's a handler for this unit, adn it's not NaN
        if (number === number) {
            if (handler) {
                number = handler(number);
            }
            return time + number;
        }
    }, 0);
});
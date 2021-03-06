'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isnumber;
// Copyright 2015 JC Fisher

// Returns true when the value is a finite number.
function isnumber(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}
module.exports = exports['default'];
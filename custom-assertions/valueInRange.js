const util = require("util");
const _ = require("lodash");
exports.assertion = function(selector, originalValue, deviation, msg) {
    const MSG_ELEMENT_NOT_FOUND = "Testing if element <%s> contains text: \"%s\". " +
    "Element could not be located.";


    this.expected = deviation.replace("$", "")*1;
    this.originalValue = originalValue.replace("$", "")*1;

    this.lowerRange = this.originalValue - this.expected;
    this.upperRange = this.originalValue + this.expected;

    this.value = (result) => parseFloat(result.value.replace("$", ""));

    this.message = msg || util.format("Testing if element <%s> is between $\"%s\" ~ $\"%s\".", selector, this.lowerRange, this.upperRange);
    this.pass = (actual) => {
        if (_.inRange(actual, this.lowerRange, this.upperRange)) {
            return true;
        } else {
            return false;
        }
    };

    this.failure = function(result) {
        const failed = result === false || result && result.status === -1;
        if (failed) {
            this.message = msg || util.format(MSG_ELEMENT_NOT_FOUND, selector, originalValue);
        }
        return failed;
    };

    this.command = function(callback) {
        return this.api.getText(selector, callback);
    };
};


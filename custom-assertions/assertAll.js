let util = require("util");
exports.assertion = function(elementSelector, expectedValue, msg) {
    this.message = msg || util.format("Testing if elements located by \"%s\" are visible", elementSelector);
    this.expected = expectedValue;
    this.pass = function(value) {
        return value === this.expected;
    };
    this.value = function(result) {
        return result;
    };
    this.command = function(callback) {
        let that = this.api;
        this.api.elements("css selector", elementSelector, function(elements) {
            elements.value.forEach(function(element) {
                that.elementIdDisplayed(element.Element, function(result) {
                    if (!result.value) {
                        callback(false);
                    }
                });
            });
            callback(true);
        });
        return this;
    };
};

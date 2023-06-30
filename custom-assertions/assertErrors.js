/**
 * Check how many elements are visible by given css selector.
 *
 */

let util = require("util");
exports.assertion = function(elementSelector, expectedCount, msg) {
    this.message = msg || util.format("Asserting %s elements located by css selector \"%s\" are visible", expectedCount, elementSelector);
    this.expected = expectedCount;
    this.count = 0;
    this.pass = function(value) {
        return value === this.expected;
    };
    this.value = function(result) {
        return this.count;
    };
    this.command = function(callback) {
        let self = this;
        let elcount = 0;
        this.count = 0;
        this.api.elements("css selector", elementSelector, function(elements) {
            if (elements.value && elements.value.length > 0) {
                elcount = elements.value.length;
            } else {
                return callback(false);
            }
            elements.value.forEach(function(element) {
                self.api.elementIdDisplayed(element.ELEMENT, function(result) {
                    if (result.value) {
                        self.count++;
                    }
                    elcount--;
                    if (elcount === 0) {
                        callback(self.count);
                    }
                });
            });
        });
    };
};

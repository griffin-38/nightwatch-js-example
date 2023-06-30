exports.assertion = function(selector) {
    this.message = "Testing if element <" + selector + "> can be seen!";
    this.expected = true;
    this.pass = function(value) {
        return value === this.expected;
    };
    this.value = function(result) {
        return result.value;
    };
    this.command = function(callback) {
        const self = this;
        return this.api.isVisible(selector, function(result) {
            callback.call(self, result);
        });
    };
};

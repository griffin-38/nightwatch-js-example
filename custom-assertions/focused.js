exports.assertion = function(selector, expected) {
    this.message = "Testing if element <" + selector + "> is focused.";
    this.expected = expected !== false;
    this.value = function(res) {
        return res.value;
    };
    this.pass = function(val) {
        return val === this.expected;
    };
    this.command = function(cb) {
        const self = this;
        return this.api.execute(function(selector) {
            return document.querySelector(selector) === document.activeElement;
        }, [selector], function(res) {
            cb.call(self, res);
        });
    };
};

require("../../config/environment");

module.exports = {
    elements: {
        privatePart: {
            selector: ".loan-types > div:nth-child(1) > label:nth-child(2)",

        },
        dealerPur: {
            selector: ".loan-types > div:nth-child(1) > label:nth-child(4) > span:nth-child(1)",
        },
    },
    commands: [{
        assertPriv: function(text) {
            return this.client.assert.containsText(this.selectors.privatePart, text);
        },
        assertPur: function(text) {
            return this.client.assert.containsText(this.selectors.dealerPur, text);
        },
    }],
};

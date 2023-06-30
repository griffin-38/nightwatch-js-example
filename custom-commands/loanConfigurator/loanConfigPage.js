let _ = require("lodash");

module.exports = {
    elements: {
        vehiclePrice: {
            selector: "div[id='price-summary'] > div:nth-of-type(2) > div[class*='price']",
        },
        salesTax: {
            selector: "div[ng-if*='salesTax'] > div[class*='price text-right']",
        },
        registrationFee: {
            selector: "div[ng-if*='registrationFee'] > div[class*='price text-right']",
        },
        closingCosts: {
            selector: "div[ng-if='$ctrl.closingCosts'] > div[class*='item'] > span[class*='price']",
        },
        originationFee: {
            selector: "div[ng-if*='originationFee']  div[class*='price']",
        },
        estimatedDealerFee: {
            selector: "div[ng-if*='dealerFee']  div[class*='price']",
        },
        totalPrice: {
            selector: "div[class*='total-price'] > div > span[class*='price']",
        },
        downPayment: {
            selector: "div.row:nth-child(8) > div:nth-child(2)",
        },
        loanAmount: {
            selector: "div[class*='loan-amount'] > div[class*='price']",
        },
        monthlyPayment: {
            selector: "div[class*='pull-right green']",
        },
        apr: {
            selector: "div[class='slider-label'] > span[class*='green pull-right']",
        },
        expandClosingCosts: {
            selector: "i[id='expand-closing-costs']",
        },

    },
    commands: [{
        assertMonthly: function(selector, range1, range2) {
            this
                .waitForValue(selector, this.getText, function(text) {
                    text = _.replace(text, "$", "");
                    text = _.replace(text, "/mo", "");
                    text = _.replace(text, "%", "");
                    text = Number(text);
                    console.log("Monthly Payment:", text);
                    return _.inRange(text, range1, range2);
                }, 5000);
            return this;
        },
        assertMonthlyPayment: function(value, range) {
            return this
                .waitForElementVisible("@monthlyPayment", 2000)
                .assert.valueInRange("@monthlyPayment", value, range);
        },
        openClosingCosts: function() {
            return this
                .waitForElementVisible("@expandClosingCosts")
                .click("@expandClosingCosts");
        },
        assertVehiclePrice: function(value) {
            return this
                .waitForElementVisible("@vehiclePrice", 2000)
                .assert.containsText("@vehiclePrice", value);
        },
        assertSalesTax: function(value) {
            return this
                .waitForElementVisible("@salesTax", 2000)
                .assert.containsText("@salesTax", value);
        },
        assertRegistrationFee: function(value) {
            return this
                .waitForElementVisible("@registrationFee", 2000)
                .assert.containsText("@registrationFee", value);
        },
        assertClosingCosts: function(value) {
            return this
                .waitForElementVisible("@closingCosts", 2000)
                .assert.containsText("@closingCosts", value);
        },
        assertOriginationFee: function(value) {
            return this
                .waitForElementVisible("@originationFee", 2000)
                .assert.containsText("@originationFee", value);
        },
        assertEstimatedDealerFee: function(value) {
            return this
                .waitForElementVisible("@estimatedDealerFee", 2000)
                .assert.containsText("@estimatedDealerFee", value);
        },
        assertTotalPrice: function(value) {
            return this
                .waitForElementVisible("@totalPrice", 2000)
                .assert.containsText("@totalPrice", value);
        },
        assertDownPayment: function(value) {
            return this
                .waitForElementVisible("@downPayment", 2000)
                .assert.containsText("@downPayment", value);
        },
        assertLoanAmount: function(value) {
            return this
                .waitForElementVisible("@loanAmount", 2000)
                .assert.containsText("@loanAmount", value);
        },
        assertAPR: function(value) {
            return this
                .waitForElementVisible("@apr", 2000)
                .assert.containsText("@apr", value);
        },
    }],
};

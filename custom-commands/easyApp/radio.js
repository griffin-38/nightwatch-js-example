require("../../config/environment");

module.exports = {
    url: function() {
        return this.api.launchUrl;
    },
    elements: {
        typePur: {
            selector: "//label[@for='product-type-purchase']",
            locateStrategy: "xpath",
        },
        typeRefi: {
            selector: "//label[@for='product-type-refinance']",
            locateStrategy: "xpath",
        },
        typePri: {
            selector: "//label[@for='loan-type-private-party']",
            locateStrategy: "xpath",
        },
        typeDeal: {
            selector: "//label[@for='loan-type-dealer-purchase']",
            locateStrategy: "xpath",
        },
        yesCar: {
            selector: "//label[@for='has-vehicle-yes']",
            locateStrategy: "xpath",
        },
        noCar: {
            selector: "//label[@for='has-vehicle-no']",
            locateStrategy: "xpath",
        },
        radioRent: {
            selector: "//label[@for='living-situation-rent']",
            locateStrategy: "xpath",
        },
        radioOwn: {
            selector: "//label[@for='living-situation-own']",
            locateStrategy: "xpath",
        },
        radioOther: {
            selector: "//label[@for='living-situation-other']",
            locateStrategy: "xpath",
        },
        eligMakes: {
            selector: "//a[contains(.,'eligible makes')]",
            locateStrategy: "xpath",
        },
        inEligMakes: {
            selector: "//a[contains(.,'ineligible vehicles')]",
            locateStrategy: "xpath",
        },
        isNew: {
            selector: "//label[@for='is-new-yes']",
            locateStrategy: "xpath",
        },
        isOld: {
            selector: "//label[@for='is-new-no']",
            locateStrategy: "xpath",
        },
        typeOfApp: {
            selector: "//h5[contains(.,'Joint Application')]",
            locateStrategy: "xpath",
        },
        marriedText: {
            selector: "//div[contains(.,'Married individuals may apply without their spouse')]",
            locateStrategy: "xpath",
        },
        deskLogo: {
            selector: "//img[@class='desktop-logo']",
            locateStrategy: "xpath",
        },
        loanPurchase: {
            selector: "//label[@for='product-type-purchase']",
            locateStrategy: "xpath",
        },
        loanDealer: {
            selector: "//label[@for='loan-type-dealer-purchase']",
            locateStrategy: "xpath",
        },
        hasCoBoFalse: {
            selector: "//label[@for='has-co-borrower-false']",
            locateStrategy: "xpath",
        },
        hasCoBoTrue: {
            selector: "//label[@for='has-co-borrower-true']",
            locateStrategy: "xpath",
        },
    },
    commands: [{
        selectPur: function() {
            return this.assert.elementPresent("@typePur")
                .waitFor(2000)
                .click("@typePur");
        },
        selectRefi: function() {
            return this
                .waitForElementVisible("@typeRefi", 2000)
                .click("@typeRefi")
                .waitFor(2000)
                .click("@hasCoBoFalse");
        },
        selectProductType: function(selector) {
            this.assert.elementPresent("@typeRefi")
                .waitFor(2000)
                .click(selector);
            return this;
        },
        selectTypeOf: function() {
            this
                .assert.elementPresent("@deskLogo")
                .click("@loanPurchase")
                .click("@loanDealer")
                .click("@hasCoBoFalse");
            return this;
        },
        selectPrivate: function(data) {
            return this.assert.elementPresent("@typePur").waitFor(1000)
                .click("@typePur")
                .click("@typePri")
                .click("@hasCoBoFalse")
                .click("@yesCar")
                .waitFor(2000);
        },
        selectDealer: function(data) {
            return this.assert.elementPresent("@typePur")
                .click("@typePur")
                .click("@typeDeal")
                .click("@yesCar")
                .click("@isOld")
                .waitFor(2000);
        },
        verifyMakes: function(data) {
            return this.assert.elementPresent("@typePur")
                .click("@typePur")
                .click("@typeDeal")
                .click("@yesCar")
                .click("@eligMakes")
                .waitFor(1000)
                .getText("@eligMakes", function(result) {
                    this.assert.equal(result.value, data);
                });
        },
        typePur: function() {
            return this.assert.elementPresent("@typePur")
                .waitFor(1000);
        },
    }],
};


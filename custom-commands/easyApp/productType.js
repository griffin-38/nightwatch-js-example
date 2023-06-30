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
    },
    commands: [{
        selectPur: function() {
            return this.assert.elementPresent("@typePur")
                .click("@typePur")
                .waitFor(1000);
        },
        selectRefi: function() {
            return this.assert.elementPresent("@typeRefi")
                .click("@typeRefi")
                .waitFor(1000);
        },
        selectDealer: function(data) {
            return this.assert.elementPresent("@typePur")
                .click("@typePur")
                .click("@typeDeal")
                .click("@yesCar")
                .click("@isOld")
                .waitFor(1000);
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
    }],
};


require("../../config/environment");

module.exports = {
    elements: {
        usCitizenB: {
            selector: "//label[@for='borrower-citizenship-status-us-citizen']",
            locateStrategy: "xpath",
        },
        permanentB: {
            selector: "//label[contains(.,' Permanent Resident')]",
            locateStrategy: "xpath",
        },
        nonPermanentB: {
            selector: "//label[@for='borrower-citizenship-status-non-permanent-resident']",
            locateStrategy: "xpath",
        },
        usCitizenCo: {
            selector: "//label[@for='coBorrower-citizenship-status-us-citizen']",
            locateStrategy: "xpath",
        },
        permanentCo: {
            selector: "//label[contains(@for,'borrower-citizenship-status-permanent-resident')]",
            locateStrategy: "xpath",
        },
        nonPermanentCo: {
            selector: "//label[@for='coBorrower-citizenship-status-non-permanent-resident']",
            locateStrategy: "xpath",
        },
        permBoResident: {
            selector: "//citizenship-status-input/div/label[2]/span",
            locateStrategy: "xpath",
        },
        permCoResident: {
            selector: "//div[@id='easy-application']/div/form/span/easy-app-borrower/sba-easy-app-personal/div/section/div/div[2]/div[6]/div/citizenship-status-input/div/label[2]",
            locateStrategy: "xpath",
        },

    },
    commands: [{
        citizenshipBorrower: function() {
            return this.assert.elementPresent("@usCitizenB")
                .click("@usCitizenB")
                .waitFor(1000);
        },
        citizenshipCoBorrower: function() {
            return this.assert.elementPresent("@usCitizenCo")
                .click("@usCitizenCo")
                .waitFor(1000);
        },
        permResidentBorrower: function() {
            return this.assert.elementPresent("@permBoResident")
                .click("@permBoResident")
                .waitFor(1000);
        },
        permResidentCoBorrower: function() {
            return this.assert.elementPresent("@permCoResident")
                .click("@permCoResident")
                .waitFor(1000);
        },
        residentStatus: function(selector) {
            return this.assert.elementPresent(selector)
                .click(selector)
                .waitFor(1000);
        },
    }],
};

/*
  .click("@editState") // option[value='number:5']
        .waitForElementVisible("@sellerState", 1000)
        .click("@stateCali")
        .waitFor(1000);
        */

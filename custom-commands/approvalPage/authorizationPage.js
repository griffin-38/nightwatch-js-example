module.exports = {
    elements: {
        title: {
            selector: "h1[class*='page-title']",
        },
        subtitleTxt: {
            selector: "p[class*='page-subtitle']",
        },
        subtitleText: {
            selector: ".page-subtitle",
        },
        zipCode: {
            selector: "input[id='zipCode']",
        },
        dob: {
            selector: "input[id='dob']",
        },
        verifyBtn: {
            selector: "button[type='submit']",
        },
        warningBox: {
            selector: "div[class*='alert-warning'] > span",
        },
        fullRow: {
            selector: "//*[@id='main-view']/ui-view/identify-borrower/div/div/div/div/div[2]",
            locateStrategy: "xpath",
        },
    },
    commands: [{

        quickAuthorization: function(zipcode, dateOfBirth) {
            return this
                .waitForElementVisible("@title", 8000)
                .assert.containsText("@title", "Confirm Identity")
                .setValue("@zipCode", zipcode)
                .setValue("@dob", dateOfBirth)
                .click("@verifyBtn")
                .waitForAngular("");
        },
        quickMobAuthorization: function(zipcode, dateOfBirth) {
            return this
                .assert.containsText("@title", "Confirm Identity")
                .assert.containsText("@subtitleText", "For added security, please enter your information below")
                .setValue("@zipCode", zipcode)
                .setValue("@dob", dateOfBirth)
                .click("@verifyBtn")
                .waitFor(5000);
        },
        fullAuthorizationTest: function(zipcode, dateOfBirth) {
            return this
                .waitForElementVisible("@title", 3000)
                .assert.containsText("@title", "Confirm Identity")
                .assert.containsText("@subtitleText", "For added security, please enter your information below")
                .click("@verifyBtn")
                .setValue("@zipCode", "11111")
                .setValue("@dob", "01/01/1901")
                .click("@verifyBtn")
                .waitForAngular("")
                .assert.containsText("@warningBox", "The information you entered does not match our records. Let’s try that again")
                .clearValue("@zipCode")
                .clearValue("@dob")
                .setValue("@zipCode", zipcode)
                .setValue("@dob", dateOfBirth);
        },
        getAllText: function(value) {
            return this.assert.elementPresent("@title")
                .getText("@fullRow", function(result) {
                    console.log(result.value);
                    this.assert.equal(typeof result, "object");
                    this.assert.equal(result.status, 0);
                    this.assert.equal(result.value, value);
                });
        },
    }],
};

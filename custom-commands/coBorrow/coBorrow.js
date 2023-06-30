require("../../config/environment");
const ENV = process.env.NODE_ENV;
const launchUrl = `https://sba-${ENV}.platform.springboardauto.com/sba`;

module.exports = {
    url: function(emails, token) {
        return `${launchUrl}/co-borrower/auth?email=${emails}&envelopeId=${token}`;
    },
    elements: {
        title: {
            selector: ".title",
        },
        sub: {
            selector: ".sub-title",
        },
        dob: {
            selector: "#dob",
        },
        zip: {
            selector: "#zip",
        },
        deskLogo: {
            selector: ".desktop-logo",
        },
        continue: {
            selector: ".continue",
        },
        error: {
            selector: ".//*[@id='document-signing']/section[2]/form/div[1]/div[1]/error-messages/div/div/div[30]/div/span[1]",
            locateStrategy: "xpath",
        },
        error_: {
            selector: ".//*[@id='document-signing']/section[2]/form/div[1]/div[2]/error-messages/div/div/div[30]/div/span[1]",
            locateStrategy: "xpath",
        },
        errors: {
            selector: ".ng-active",
        },
        dobText: {
            selector: "//div[contains(.,'Date of Birth')]",
            locateStrategy: "xpath",
        },
        zipText: {
            selector: "//div[contains(.,'Zip')]",
            locateStrategy: "xpath",
        },
    },
    commands: [{
        checkCoStuff: function() {
            this
                .assert.elementPresent("@deskLogo")
                .assert.elementPresent("@title")
                .assert.containsText("@dobText", "Date of Birth")
                .assert.containsText("@zipText", "Zip");
            return this;
        },
        setFields: function(dob, zip) {
            this
                .setValue("@dob", dob)
                .setValue("@zip", zip)
                .waitFor(1000);
            return this;
        },
        coBorrowerSum: function(dob, zip) {
            this
                .assert.elementPresent("@deskLogo")
                .assert.elementPresent("@title")
                .assert.containsText("@dobText", "Date of Birth")
                .assert.containsText("@zipText", "Zip")
                .setValue("@dob", dob)
                .setValue("@zip", zip)
                .waitFor(2000)
                .click("@continue")
                .waitFor(5000);
            return this;
        },
        assertFields: function(dob, zip) {
            this
                .assert.valueContains("@dob", dob)
                .assert.valueContains("@zip", zip);
            return this;
        },
        submitCoBorrow: function(title, sub) {
            this
                .assert.containsText("@title", title)
                .assert.containsText("@sub", sub)
                .click("@continue")
                .waitFor(5000);
            return this;
        },
        assertError: function(error) {
            this
                .click("@continue")
                .waitFor(1000)
                .assert.containsText("@errors", error)
                .assert.containsText("@errors", error);
            return this;
        },
        wrongInput: function(bad, bad_, error_, dob_, zip_, errors) {
            this
                .setValue("@dob", bad)
                .setValue("@zip", bad_)
                .click("@continue")
                .waitFor(1000)
                .clearValue("@dob")
                .setValue("@dob", dob_)
                .setValue("@zip", zip_)
                .click("@continue")
                .waitFor(1000)
                .assert.containsText("@errors", errors)
                .clearValue("@dob")
                .clearValue("@zip").waitFor(2000);
            return this;
        },
        confirmBorrow: function(error, bad, bad_, error_, dob_, zip_, errors, dob, zip, title, sub) {
            this
                .checkCoStuff()
                .assertError(error, error)
                .wrongInput(bad, bad_, error_, dob_, zip_, errors)
                .setFields(dob, zip)
                .assertFields(dob, zip)
                .submitCoBorrow(title, sub);
            return this;
        },
    }],
};


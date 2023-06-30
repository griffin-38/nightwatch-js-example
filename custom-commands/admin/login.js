require("../../custom-commands/commands/userLogin.js");

module.exports = {
    url: function() {
        return this.api.launch_url + "/sba/login";
    },
    elements: {
        userEmail: {
            selector: "#email",
        },
        userPass: {
            selector: "#password",
        },
        submit: {
            selector: ".button--md",
        },
        invalid: {
            selector: ".ng-active>div>div>span",
        },
        userEmailx: {
            selector: "//input[@id='email']",
            locateStrategy: "xpath",
        },
        userPassx: {
            selector: "//input[@id='password']",
            locateStrategy: "xpath",
        },
        submitx: {
            selector: "//button[@type='submit']",
            locateStrategy: "xpath",
        },

    },
    commands: [{
        userEmail: function(email, password) {
            this
                .waitForElementVisible("@userEmail", 2000)
                .setValue("@userEmail", email)
                .waitForElementVisible("@userPass", 2000)
                .setValue("@userPass", password)
                .assert.elementPresent("@submit")
                .submitForm("@submit").waitFor(10000)
                .assert.containsText("@invalid", "Invalid email or password");
            return this;
        },
        checkUserEmail: function(email, password) {
            return this.setValue("@userEmail", email)
                .setValue("@userPass", password)
                .click("@submit")
                .waitFor(3000);
        },
        mobileLogger: function(email, password) {
            this
                .navigate()
                .waitForElementVisible("@userEmailx", 2000)
                .setValue("@userEmailx", email)
                .setValue("@userPassx", password)
                .submitForm("@submitx")
                .waitFor(10000);
            return this;
        },
    }],
};


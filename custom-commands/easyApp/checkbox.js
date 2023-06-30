

module.exports = {
    url: function() {
        return this.api.launch_url + "sba/p2p/buyer/seller-details";
    },
    elements: {
        checkBox: {
            selector: "//span[@class='square-checkbox']",
            locateStrategy: "xpath",
        },
        consentBoxF: {
            selector: ".//*[@id='easy-application']/div/form/sba-easy-app-consents/section/div/div[1]/ul/li[1]/label/span",
            locateStrategy: "xpath",
        },
        consentBoxE: {
            selector: ".//*[@id='easy-application']/div/form/sba-easy-app-consents/section/div/div[1]/ul/li[2]/label/span",
            locateStrategy: "xpath",

        },
        checkboxCss: {
            selector: ".inline-check-boxes",
        },
        checkBoxer: {
            selector: ".square-checkbox",
        },
        yesBox: {
            selector: "//label[contains(.,' Yes')]",
            locateStrategy: "xpath",
        },
        noBox: {
            selector: "//label[contains(.,' No')]",
            locateStrategy: "xpath",
        },
        saveContinue: {
            selector: ".continue",
        },
        requiredField: {
            selector: "//span[@translate='Field is required']",
            locateStrategy: "xpath",
        },
        deskLogo: {
            selector: ".desktop-logo",
        },
        eCheckBox: {
            selector: "//span[@class='consent-checkbox square-checkbox']",
            locateStrategy: "xpath",
        },
    },
    commands: [{
        checkBoxx: function() {
            return this.assert.elementPresent("@checkBox")
                .click("@checkBox");
        },
        checkConsent: function() {
            return this.assert.elementPresent("@consentBox")
                .click(".//*[@id='easy-application']/div/form/sba-easy-app-consents/section/div/div[1]/ul/li[1]/label/span")
                .waitFor(1000)
                .click(".//*[@id='easy-application']/div/form/sba-easy-app-consents/section/div/div[1]/ul/li[2]/label/span");
        },
        checkBoxErr: function() {
            this
                .assert.elementPresent("@deskLogo")
                .click("@checkBoxer")
                .click("@saveContinue")
                .assert.elementPresent("@requiredField")
                .click("@checkBoxer");
            return this;
        },
        checkInspBox: function(client) {
            this
                .waitForElementVisible("@checkBoxer", 2000)
                .click("@checkBoxer", function(res) {
                    console.log(res);
                    this.waitFor(1000);
                })
                .click("@saveContinue", function(res) {
                    console.log(res);
                    this.waitFor(8000);
                });
            return this;
        },
        electricBox: function(client) {
            this
                .waitForElementVisible("@eCheckBox", 2000)
                .click("@eCheckBox", function(res) {
                    console.log(res);
                    this.waitFor(1000);
                });
            return this;
        },
        mobileCheckBox: function() {
            return this.assert.elementPresent("@deskLogo")
                .waitForElementVisible("@checkBoxer", 2000)
                .click("@checkBoxer")
                .click("@saveContinue")
                .waitForAngular("")
                .waitFor(8000);
        },
    }],
};

// accSelect - update if used anywhere - changed this to seller Detail on 1/8
// todo: on test make sure that when these items are updated, monthly payment is updated, interest rate is updated, down payment & loan amount
// in total summary is updated

/*
     browser.elements("xpath","//ul[@name='timesList']/h6", function(result){
        els = result.value;
        var i = 0;
        els.forEach(function(el, j, elz){
            browser.elementIdText(el.ELEMENT, function(text) {
                dates[i] = text.value;
                i++;
            });
        });
    });
    */

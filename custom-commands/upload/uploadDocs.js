module.exports = {
    url: function() {
        return this.api.launchUrl + "/sba/purchase/buyer/loan-configurator";
    },
    elements: {
        progressText: {
            selector: ".step-text",
        },
        progressActiv: {
            selector: ".current > .step-text",
        },
        progressBold: {
            selector: ".step-text.h5",
        },
        completedTask: {
            selector: ".complete > .step-text",
        },
        incomplete: {
            selector: ".incomplete",
        },
        incompleteTask: {
            selector: ".list-group-item.incomplete",
        },
        lastTask: {
            selector: ".incomplete.last-step > .step-text",
        },
        myprogress: {
            selector: "//div[contains(.,'My Progress')]",
            locateStrategy: "xpath",
        },
        loanConfig: {
            selector: "//div[contains(.,'Loan Configurator')]",
            locateStrategy: "xpath",
        },
        sellerDetails: {
            selector: "//div[contains(.,'Seller Details')]",
            locateStrategy: "xpath",
        },
        confirmLoan: {
            selector: "//div[contains(.,'Confirm Loan')]",
            locateStrategy: "xpath",
        },
        confirmPur: {
            selector: "//div[contains(.,'Confirm Purchase')]",
            locateStrategy: "xpath",
        },
        closingApp: {
            selector: "//div[contains(.,'Closing Appointment')]",
            locateStrategy: "xpath",
        },
        docuSign: {
            selector: "//div[contains(.,'Document Signing')]",
            locateStrategy: "xpath",
        },
        congrats: {
            selector: "//div[contains(.,'Congratulations!')]",
            locateStrategy: "xpath",
        },
        verifications: {
            selector: "//div[contains(.,'Verifications')]",
            locateStrategy: "xpath",
        },
        schedule: {
            selector: "//button[contains(.,'Save & Continue')]",
            locateStrategy: "xpath",
        },
        dealerApp: {
            selector: "//div[contains(.,'Dealer Appointment')]",
            locateStrategy: "xpath",
        },
        confirmPurchase: {
            selector: "//div[contains(.,'Confirm Purchase')]",
            locateStrategy: "xpath",
        },
        dealerDetails: {
            selector: "//div[contains(.,'Dealer Details')]",
            locateStrategy: "xpath",
        },
        completeApp: {
            selector: "//div[contains(.,'Complete Application')]",
            locateStrategy: "xpath",
        },
        disabled: {
            selector: "//div[contains(@disabled,'disabled')]",
            locateStrategy: "xpath",
        },
        deskTopLogo: {
            selector: "//img[@class='desktop-logo']",
            locateStrategy: "xpath",
        },
        dropDoc: {
            selector: "input[id*='drag-and-drop']",
        },
        modal: {
            selector: "form[class*='pristine']",
        },
        uploadButton: {
            selector: "button[class*='submit']",
        },
        closeModal: {
            selector: "button[class*='close']",
        },
    },
    commands: [{
        assertProgress: function() {
            return this.assert.elementPresent("@myprogress")
                .assert.elementPresent("@loanConfig")
                .assert.elementPresent("@dealerDetails")
                .assert.elementPresent("@completeApp")
                .assert.elementPresent("@verifications")
                .assert.elementPresent("@dealerApp")
                .assert.elementPresent("@confirmPurchase");
        },
        assertRefiProgress: function() {
            return this.assert.elementPresent("@myprogress")
                .assert.elementPresent("@progressActiv")
                .assert.elementPresent("@loanConfig")
                .assert.elementPresent("@verifications")
                .assert.elementPresent("@confirmLoan")
                .assert.elementPresent("@closingApp")
                .assert.elementPresent("@docuSign")
                .assert.elementPresent("@congrats");
        },
        assertProgressP: function() {
            return this.assert.elementPresent("@myprogress")
                .assert.elementPresent("@loanConfig")
                .assert.elementPresent("@sellerDetails")
                .assert.elementPresent("@completeApp");
        },
        progressCheck: function(console) {
            this.api.elements("css selector", ".list-group-item.incomplete", function(result) {
                result.value.forEach(function(element) {
                    const data = [{
                        ELEMENT: "18",
                    },
                    {
                        ELEMENT: "19",
                    },
                    {
                        ELEMENT: "20",
                    },
                    {
                        ELEMENT: "21",
                    },
                    ];
                    console.log(element === data);
                });
            });
        },
        uploadDocs: function(button, doc, callback) {
            this
                .waitForAngular("")
                .waitFor(3000)
                .waitForElementVisible(button, 5000)
                .click(button)
                .waitForAngular("")
                .waitForElementVisible("@modal", 3000)
                .waitForElementPresent("@dropDoc", 3000)
                .setValue("@dropDoc", doc)
                .waitForElementPresent("@uploadButton", 5000)
                .click("@uploadButton")
                .waitForAngular("")
                .waitForElementPresent("@closeModal", 3000)
                .click("@closeModal")
                .waitForAngular("");

            this.api.perform(function() {
                // this.api.addTests(8851);
                this.api.addTestTravis();
                callback();
            });
            return this;
        },
    }],
};

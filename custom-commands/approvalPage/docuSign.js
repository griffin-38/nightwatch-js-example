require("../../config/environment");
module.exports = {
    url: function() {
        return this.api.launchUrl + "demo.docusign.net/Signing/";
    },
    elements: {
        deskLogo: {
            selector: ".desktop-logo",
        },
        docuButt: {
            selector: "//button[contains(.,'Sign Document')]",
            locateStrategy: "xpath",
        },
        signButton: {
            selector: ".sign.button--lg",
        },
        docContinue: {
            selector: "#action-bar-btn-continue",
        },
        navContinue: {
            selector: "#navigate-btn",
        },
        checkBox: {
            selector: "#disclosureAccepted",
        },
        document: {
            selector: "div[id='envelope']",
        },
        disclosure: {
            selector: "#disclosureLink",
        },
        closeIcon: {
            selector: "button.btn.btn-minor.btn-icon.x-close.close",
        },
        otherAction: {
            selector: "button[id='otherActionsButton']",
        },
        iAgreeCheck: {
            selector: "input[id='disclosureAccepted']",
        },
        continueButton: {
            selector: "button[class='btn btn-lg btn-main']",
        },
        printAndSign: {
            selector: "span > div > div > ul > li > button[data-action='show:sign-on-paper']",
        },
        uploadButton: {
            selector: "label[for='print-return-type-upload']",
        },
        downloadButton: {
            selector: "button[class='btn btn-lg btn-secondary']",
        },
        continueDoc: {
            selector: "button[id='action-bar-btn-continue']",
        },
        signDoc: {
            selector: "button[id='navigate-btn']",
        },
        signX: {
            selector: "svg",
        },
        adoptSign: {
            selector: "button[data-group-item='signature']",
        },
        bottomOfPage: {
            selector: "button[id='end-of-document-btn-finish']",
        },
        congratsText: {
            selector: "//h1[@class='spacer--bottom-20 ng-scope ng-binding']",
            locateStrategy: "xpath",
        },

    },
    commands: [{
        docuPage: function() {
            this.assert.elementPresent("@deskLogo")
                .click("@signButton")
                .waitFor(8000)
                .waitForElementVisible("@document", 5000)
                .assert.urlContains("https://demo.docusign.net/Signing/");
            return this;
        },
        docuMobPage: function() {
            this.assert.elementPresent("@deskLogo")
                .click("@signButton")
                .waitFor(5000)
                .assert.urlContains("https://demo.docusign.net/Signing/")
                .waitFor(1000)
                .click("@disclosure")
                .waitFor(3000)
                .click("@closeIcon");
            return this;
        },
        openDocuPage: function() {
            this.assert.elementPresent("@deskLogo")
                .click("@signButton")
                .waitForElementVisible("@document", 5000)
                .waitForElementVisible("@iAgreeCheck", 2000)
                .click("@iAgreeCheck")
                .click("@continueDoc");
            return this;
        },
        saveDocuPage: function() {
            this.assert.elementPresent("@deskLogo")
                .click("@signButton")
                .waitForElementVisible("@document", 5000)
                .click("@otherAction")
                .waitForElementVisible("@printAndSign", 4000)
                .click("@printAndSign")
                .waitForElementVisible("@uploadButton", 4000)
                .click("@uploadButton")
                .waitForElementVisible("@continueButton", 2000)
                .click("@continueButton")
                .waitForElementVisible("@downloadButton", 2000)
                .click("@downloadButton");

            return this;
        },
        continueDoc: function() {
            this.assert.elementPresent("@deskLogo")
                .waitForElementVisible("@signButton", 2000)
                .click("@signButton")
                .waitForElementVisible("@document", 5000)
                .click("@continueDoc");
            return this;
        },
        congratsSum: function(url) {
            this.assert.elementPresent("@deskLogo")
                .assert.elementPresent("@congratsText")
                .assert.urlEquals(url);
            return this;
        },
        openDocuSign: function(client) {
            this
                .assert.elementPresent("@deskLogo")
                .waitForElementVisible("@signButton", 5000)
                .click("@signButton")
                .waitForElementVisible("@docContinue", 10000)
                .click("@checkBox")
                .click("@docContinue");

            client
                .waitForElementVisible("div[class='page page-loaded']", 2000)
                .execute(function() {
                    return document.querySelectorAll("div[class='page page-loaded']");
                }, function(result) {
                    console.log(result);
                })
                .waitForElementVisible("div[id='documents']", 2000)
                .waitFor(2000)
                .saveScreenshot("./screenshots/MN/4.png")
                .scrolltoView("div[class='page page-loaded']")
                .waitFor(2000)
                .scrolltoView("div[class='page page-loaded']")
                .waitFor(2000)
                .saveScreenshot("./screenshots/MN/buyer_docusign_LH1B2S.png")
                .waitForAngular("");

            this
                .waitForElementVisible("@bottomOfPage", 2000)
                .moveToElement("@bottomOfPage", 10, 10);

            client.saveScreenshot("./screenshots/MN/buyer_docusign_LH1B2S_2.png");

            return this;
        },
    }],
};

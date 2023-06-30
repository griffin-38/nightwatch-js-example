require("../../config/environment");

module.exports = {
    url: function() {
        return this.api.launchUrl;
    },
    elements: {
        pageTitle: {
            selector: "//h1[@class='title']",
            locateStrategy: "xpath",
        },
        deskLogo: {
            selector: ".desktop-logo",
        },
        subTitle: {
            selector: "//h5[contains(.,'The last step is for you to complete your closing appointment.')]",
            locateStrategy: "xpath",
        },
        textOneP2P: {
            selector: "//p[contains(.,'Be sure to coordinate with the seller and choose a time that works for the both of you.')]",
            locateStrategy: "xpath",
        },
        textTwoP2P: {
            selector: "//p[contains(.,'The notary will assist with the closing and have you sign any necessary loan documents that require notarization and state specific DMV documents.')]",
            locateStrategy: "xpath",
        },
        video: {
            selector: "//img[@class='play-icon']",
            locateStrategy: "xpath",
        },
        close: {
            selector: "//button[@aria-label='Close']",
            locateStrategy: "xpath",
        },
        textRefi: {
            selector: "//p[contains(.,'The notary will assist with the closing and have you sign any necessary loan documents that require notarization and state specific DMV documents.')]",
            locateStrategy: "xpath",
        },
        // confirmedDate: {
        //     selector: "//div[contains(.,'" + moment().date(27).format("D MM/DD") + " " + moment().hour(2).format("HH") + "')]",
        //     locateStrategy: "xpath",
        // },

    },
    commands: [{
        pendingP2P: function() {
            return this.assert.elementPresent("@deskLogo")
                .assert.valueContains("@pageTitle", "You're almost finished!")
                .assert.elementPresent("@subTitle")
                .assert.elementPresent("@textOneP2P")
                .assert.elementPresent("@textTwoP2P")
                .assert.elementPresent("@video")
                .click("@video")
                .waitFor(2000)
                .click("@close");
            //  .assert.elementPresent("@confirmedDate");
        },
        pendingRefi: function() {
            return this.assert.elementPresent("@deskLogo")
                .assert.valueContains("@pageTitle", "You're almost finished!")
                .assert.elementPresent("@subTitle")
                .assert.elementPresent("@textRefi");
        },
    }],
};


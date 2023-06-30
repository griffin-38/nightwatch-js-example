
module.exports = {
    url: function() {
        return this.api.launchUrl + "/sum/p2p/buyer/complete-application";
    },
    elements: {
        title: {
            selector: "//h1[contains(.,'Are you a member?')]",
            locateStrategy: "xpath",
        },
        subTitle: {
            selector: "//h5[contains(.,'You must be a member to recieve an auto loan.')]",
            locateStrategy: "xpath",
        },
        areMember: {
            selector: "//div[@class='body2 body2-visible couplet-label ng-binding']",
            locateStrategy: "xpath",
        },
        yesText: {
            selector: "//label[@for='is-member-true']",
            locateStrategy: "xpath",
        },
        noText: {
            selector: "//label[@for='is-member-false']",
            locateStrategy: "xpath",
        },
        signUp: {
            selector: "//h1[contains(.,'Sign up for a membership')]",
            locateStrategy: "xpath",
        },
        redirectText: {
            selector: "#appointment>p",
        },
        becomeMember: {
            selector: "//button[contains(.,'Become a Member')]",
            locateStrategy: "xpath",
        },
        backButton: {
            selector: "//span[@class='back-button-label ng-binding']",
            locateStrategy: "xpath",
        },
        saveContinue: {
            selector: "//button[@class='continue button--md bg--green-blue animate-show ng-binding']",
            locateStrategy: "xpath",
        },
    },
    commands: [{
        pause: function(time) {
            this.api.pause(time);
            return this;
        },
        membership: function() { // summit married app will add seperated, unmarried later
            this
                .assert.elementPresent("@title")
                .assert.elementPresent("@subTitle")
                .assert.elementPresent("@areMember")
                .assert.elementPresent("@yesText")
                .assert.elementPresent("@noText")
                .click("@noText")
                .pause(2000)
                .assert.elementPresent("@signUp")
                .assert.elementPresent("@redirectText")
                .assert.elementPresent("@becomeMember")
                .assert.elementPresent("@backButton")
                .click("@yesText")
                .click("@saveContinue");

            return this;
        },
    }],
};

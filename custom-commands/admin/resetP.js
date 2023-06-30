
module.exports = {
    url: function() {
        return this.api.launchUrl + "/sba/login";
    },
    elements: {
        dropDown: {
            selector: ".dropdown-toggle",
        },
        dropMenu: {
            selector: ".dropdown-menu",
        },
        deskLogo: {
            selector: ".desktop-logo",
        },
        logOut: {
            selector: "//a[contains(.,'Log Out')]",
            locateStrategy: "xpath",
        },
        logIn: {
            selector: "//a[contains(.,'Log Out')]",
            locateStrategy: "xpath",
        },
    },
    commands: [{
        logout: function() {
            return this.click("@dropDown")
                .waitFor(1000)
                .click("@dropMenu")
                .waitFor(1000)
                .assert.elementPresent("@deskLogo");
        },
    }],
};

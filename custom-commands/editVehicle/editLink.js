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
        editIcon: {
            selector: ".button--blue-clear",
        },
        logOut: {
            selector: "//a[contains(.,'Log Out')]",
            locateStrategy: "xpath",
        },
        editLink: {
            selector: "//a[@ng-click='$ctrl.goToEditVehicle()']", // sba/purchase/buyer/vehicle
            locateStrategy: "xpath",
        },
        helpCenter: {
            selector: "//a[contains(.,'Help Center')]", // https://help.springboardauto.com/hc/en-us
            locateStrategy: "xpath",
        },
        saveContinue: {
            selector: ".continue",
        },
        title: {
            selector: ".title",
        },
        vehiclePrice: {
            selector: "#vehicle-price",
        },
        vin: {
            selector: "#vin",
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
        changeVin: function(vin) {
            this
                .waitForElementVisible("@deskLogo", 3000)
                .click("@editIcon")
                .waitFor(1000)
                .clearValue("@vin")
                .waitFor(1000)
                .setValue("@vin", vin)
                .waitFor(1000)
                .clearValue("")
                .waitFor(1000)
                .setValue("@vehiclePrice", "28500.00")
                .waitFor(1000)
                .click("@saveContinue");
            return this;
        },
        checkEditLink: function(title) {
            this
                .assert.elementPresent("@deskLogo")
                .click("@dropDown")
                .click("@editLink")
                .waitForAngular("")
                .assert.containsText("@title", title)
                .click("@saveContinue");
            return this;
        },
    }],
};

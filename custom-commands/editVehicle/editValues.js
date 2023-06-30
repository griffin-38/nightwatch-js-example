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
        vehicleMake: {
            selector: "#vehicle-ymmt-select--make", // #vehicle-ymmt-select > div:nth-child(1) > div:nth-child(2) > error-messages:nth-child(3)
        },
        vehicleMakeError: {
            selector: "#vehicle-ymmt-select > div:nth-child(1) > div:nth-child(2) > error-messages:nth-child(3)",
        },
        vehicleModelError: {
            selector: "div.col-md-3:nth-child(3) > error-messages:nth-child(3)",
        },
        vehicleTrimError: {
            selector: ".col-md-4 > error-messages:nth-child(3)",
        },
        vehicleModel: {
            selector: "#vehicle-ymmt-select--model",
        },
        vehicleTrim: {
            selector: "#vehicle-ymmt-select--trim",
        },
        vehicleTrimType: {
            selector: "#vehicle-ymmt-select--trim > option:nth-child(12)",
        },
        productSelect: {
            selector: "#product-select",
        },
        dealerPurchase: {
            selector: "#product-select > option:nth-child(1)",
        },
        privatePurchase: {
            selector: "#product-select > option:nth-child(2)",
        },
        requiredField: {
            selector: ".ng-active > span:nth-child(1)",
        },
        xpathTrim: {
            selector: "/html/body/wfc-app/div[2]/ui-view/div/div/div/section[2]/loan-configurator/div/div/section[2]/form/div[2]/div/wfc-vehicle-ymmt-select/div/div/div[4]/div[2]/select/option[12]",
        },
        bmwTrim: {
            selector: "//option[@value='string:314044']", // #vehicle-ymmt-select--trim > option:nth-child(7)
        },
        modalTitle: {
            selector: ".modal-title",
        },
        modalBody: {
            selector: ".modal-body > p:nth-child(1)",
        },
        modalOk: {
            selector: ".ok",
        },
    },
    commands: [{
        changeVin: function(vin, price) {
            this
                .waitForElementVisible("@deskLogo", 3000)
                .click("@editIcon")
                .waitFor(1000)
                .clearValue("@vin")
                .waitFor(1000)
                .setValue("@vin", vin)
                .waitFor(1000)
                .clearValue("@vehiclePrice")
                .waitFor(1000)
                .setValue("@vehiclePrice", price)
                .waitFor(1000)
                .click("@saveContinue");
            return this;
        },
        hybridVin: function(vin, price) {
            this
                .clearValue("@vin")
                .waitFor(1000)
                .setValue("@vin", vin)
                .waitFor(1000)
                .clearValue("@vehiclePrice")
                .waitFor(1000)
                .setValue("@vehiclePrice", price)
                .waitFor(1000)
                .click("@saveContinue");
            return this;
        },
        editVin: function(vin, price, trim) {
            this
                .clearValue("@vin")
                .setValue("@vin", vin)
                .waitFor(1000)
                .clearValue("@vehiclePrice")
                .setValue("@vehiclePrice", price)
                .waitFor(1000)
                .click("@vehicleTrim")
                .waitFor(1000)
                .click(trim)
                .waitFor(1000)
                .getValue("#vin", function(result) {
                    let bmwVin = result.value;
                    this.assert.equal(bmwVin, vin);
                    console.log("Vehicle Vin:", vin);
                });
            return this;
        },
        editVinPopUp: function(vin, text) {
            this
                .clearValue("@vin")
                .setValue("@vin", vin)
                .waitFor(1000)
                .verify.elementPresent("@modalTitle")
                .waitFor(1000)
                .assert.containsText("@modalBody", text)
                .click("@modalOk")
                .waitFor(1000);
            return this;
        },
        getMaMoTrim: function() {
            this
                .getText("@vehicleMakeError", function(result) {
                    this.assert.equal(result.value, "Field is required");
                    console.log(result.value);
                })
                .getText("@vehicleModelError", function(result) {
                    this.assert.equal(result.value, "Field is required");
                    console.log(result.value);
                })
                .getText("@vehicleTrimError", function(result) {
                    this.assert.equal(result.value, "Field is required");
                    console.log(result.value);
                });
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

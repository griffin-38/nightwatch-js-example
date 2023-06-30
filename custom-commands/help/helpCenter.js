
module.exports = {
    url: function() {
        return this.api.launchUrl + "/sba/purchase/buyer/loan-configurator";
    },
    elements: {
        vin: {
            selector: "//input[@id='vin']",
            locateStrategy: "xpath",

        },
        vMileage: {
            selector: "//input[@id='vehicleMileage']",
            locateStrategy: "xpath",

        },
        payOff: {
            selector: "//input[@id='estimatedPayoffAmount']",
            locateStrategy: "xpath",
        },
        monPay: {
            selector: "//input[@id='currentMonthlyPayment']",
            locateStrategy: "xpath",
        },
        firstName: {
            selector: "//input[@id='firstName']",
            locateStrategy: "xpath",
        },
        middleName: {
            selector: "//input[@id='middleName']",
            locateStrategy: "xpath",
        },
        lastName: {
            selector: "//input[@id='lastName']",
            locateStrategy: "xpath",
        },
        email: {
            selector: "//input[@id='email']",
            locateStrategy: "xpath",
        },
        mobilePhone: {
            selector: "//input[@id='mobilePhone']",
            locateStrategy: "xpath",
        },
        street: {
            selector: "//input[@id='street']",
            locateStrategy: "xpath",
        },
        street2: {
            selector: "//input[@id='street2']",
            locateStrategy: "xpath",
        },
        zip: {
            selector: "//input[@id='zip']",
            locateStrategy: "xpath",
        },
        city: {
            selector: "//input[@id='city']",
            locateStrategy: "xpath",
        },
        county: {
            selector: "//input[@id='county']",
            locateStrategy: "xpath",
        },
        durYears: {
            selector: "//input[@id='durationYears']",
            locateStrategy: "xpath",
        },
        durMonths: {
            selector: "//input[@id='durationMonths']",
            locateStrategy: "xpath",
        },
        addIncome: {
            selector: "//input[@confirm-type='additionalIncome']",
            locateStrategy: "xpath",
        },
        clearForm: {
            selector: "//span[contains(.,'Clear Form')]",
            locateStrategy: "xpath",
        },
        salePrice: {
            selector: "#vehiclePrice",
        },
        vehcileMiles: {
            selector: "#vehicleMileage",
        },
        vVin: {
            selector: "#vin",
        },
        saveCar: {
            selector: "#save-car",
        },
        // drop downs edit car
        sellertype: {
            selector: "#sellerType",
        },
        sellerState: {
            selector: "#sellerState",
        },
        vehicleModel: {
            selector: "#vehicleModel",
        },
        vehicleTrim: {
            selector: "#vehicleTrim",
        },
        vehicleMake: {
            selector: "#vehicleMake",
        },
        vehicleYear: {
            selector: "#vehicleYear",
        },
        cancel: {
            selector: "#cancel",
        },
        editCar: {
            selector: "#edit-car",
        },
        helpTextA_: {
            selector: "//i[@uib-popover='Annual Percentage Rate (APR) is a standardized method of stating the actual cost of credit (interest and finance fees) and takes into account the continual reduction of the principal amount through amortization.']",
            locateStrategy: "xpath",
        },
        helpTextD_: {
            selector: "//i[@uib-popover='The initial amount paid at the time of purchase or refinance. Down payment reduces the loan amount and the monthly payment. Sometimes we need you to pay a down payment upfront to qualify for a loan.']",
            locateStrategy: "xpath",
        },
        helpTextT_: {
            selector: "//i[@uib-popover='The number of scheduled monthly payments until the loan is paid in full. Sometimes the minimum & maximum term available for financing may vary depending on your down payment, vehicle, credit score, and trade in.']",
            locateStrategy: "xpath",
        },
        title: {
            selector: "//h1[@class='title']",
            locateStrategy: "xpath",
        },
        dropDown: {
            selector: "//a[@class='dropdown-toggle']",
            locateStrategy: "xpath",
        },
        helpLink: {
            selector: "//a[contains(@href,'https://help.springboardauto.com/hc/en-us')]",
            locateStrategy: "xpath",
        },
        desk: {
            selector: ".desktop-logo",
        },
        dropDownMobile: {
            selector: "//a[contains(.,'DONNA PALANDRANI ')]",
            locateStrategy: "xpath",
        },
        helpLinkMobile: {
            selector: "//a[@ng-href='https://help.springboardauto.com/hc/en-us']",
            locateStrategy: "xpath",
        },
    },
    commands: [{
        verifyHelp: function() {
            return this.assert.elementPresent("@termDur")
                .click("@paySlider")
                .waitFor(6000)
                .assert.elementPresent("@valueNow2")
                .click("@termSlider")
                .waitFor(6000)
                .assert.elementPresent("@valueNow")
                .assert.elementPresent("@totalPrice");
        },
        verifyLoanHelp: function(title) {
            return this.assert.containsText("@title", title)
                .assert.visible("@helpTextA_")
                .assert.visible("@helpTextD_")
                .assert.elementPresent("@helpTextT_");
        },
        verifyHelpDropDown: function(value) {
            this
                .assert.visible("@dropDown")
                .click("@dropDown")
                .waitFor(1000)
                .click("@helpLink")
                .waitFor(3000)
                .assert.elementPresent("@desk")
                .url(function(response) {
                    this.assert.urlContains(response.value, "https://help.springboardauto.com");
                });
        },
        verifyHelpMobile: function(value) {
            this
                .click("@dropDownMobile")
                .waitFor(4000)
                .click("@helpLinkMobile")
                .waitFor(4000)
                .assert.urlContains(value);
        },
    }],
};

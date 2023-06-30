
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
    },
    commands: [{
        verifyField: function() {
            return this.assert.elementPresent("@termDur")
                .click("@paySlider")
                .waitFor(6000)
                .assert.elementPresent("@valueNow2")
                .click("@termSlider")
                .waitFor(6000)
                .assert.elementPresent("@valueNow")
                .assert.elementPresent("@totalPrice");
        },
    }],
};

// todo: on test make sure that when these items are updated, monthly payment is updated, interest rate is updated, down payment & loan amount
// in total summary is updated

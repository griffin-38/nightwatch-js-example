const maxTime = 500 * 5;

module.exports = {
    url: function() {
        return this.api.launchUrl + "/sba/p2p/seller/inspection-appointment";
    },

    elements: {
        appTitle: {
            selector: ".col-sm-12 > .title",
        },
        appsubTitle: {
            selector: ".workflow-header > .row > .col-sm-12 > .sub-title",
        },
        checkList: {
            selector: ".inspection-checklist-title",
        },
        checkItems: {
            selector: ".col-sm-6.col-md-4",
        },
        appTime: {
            selector: ".appointment-title",
        },
        // fields
        street: {
            selector: "#street",
        },
        notes: {
            selector: "#notes",
        },
        city: {
            selector: "#city",
        },
        zip: {
            selector: "#zip",
        },
        county: {
            selector: "#county",
        },
        // drop downs
        date: {
            selector: "#datepicker-trigger",
        },
        number: {
            selector: ".btn", // set date value
        },
        dateN: {
            selector: ".btn.btn-default.btn-sm",
            // locateStrategy: "xpath"
        },
        day: {
            selector: "//small[contains(.,'Wed')]",
            locateStrategy: "xpath",
        },
        time: {
            selector: "#appointmentTime",
        },
        digits: {
            selector: "//option[@label='12:00 PM']",
            locateStrategy: "xpath",
        },
        state: {
            selector: "#state",
        },
        // save * schedule
        schedule: {
            selector: ".schedule",
        },
        process: {
            selector: "//h1[contains(.,'On Location Inspection Process')]",
            locateStrategy: "xpath",
        },
        inspectList: {
            selector: ".inspection-checklist > .inspection-checklist-title",
        },
        // save * schedule //div[contains(.,' 10584 SE 111th Ct, Ocala, FL 34472')]
        appTitlex: {
            selector: "//h3[contains(.,'inspection appointment confirmed')]",
            locateStrategy: "xpath",
        },
        continue: {
            selector: ".continue",
        },
        confirmDate: {
            selector: ".h5.global-line-height",
        },
        headerText: {
            selector: "//h5[contains(.,'The vehicle you are selling requires an inspection. Please select a time and place for the inspection appointment.  As soon as the inspection is completed, both you and the buyer will receive a notification so that you can review the results.')]",
            locateStrategy: "xpath",
        },
        carInspect: {
            selector: "//h2[contains(.,'Car Inspection')]",
            locateStrategy: "xpath",
        },
        inspectFee: {
            selector: "//span[contains(.,'$100.00')]",
            locateStrategy: "xpath",
        },
        inspectButt: {
            selector: "//button[@class='button--md bg--purple']",
            locateStrategy: "xpath",
        },
        carCCt: {
            selector: "//input[@name='cc']",
            locateStrategy: "xpath",
        },
        inpsectMonth: {
            selector: "//select[@id='month']",
            locateStrategy: "xpath",
        },
        number4: {
            selector: "//option[@label='4']",
            locateStrategy: "xpath",
        },
        year: {
            selector: "//select[@id='year']",
            locateStrategy: "xpath",
        },
        yearNine: {
            selector: "//option[@label='2019']",
            locateStrategy: "xpath",
        },
        cvc: {
            selector: "//input[@id='cvc']",
            locateStrategy: "xpath",
        },
        payNow: {
            selector: "//button[contains(.,'Pay Now')]",
            locateStrategy: "xpath",
        },
        paidInspect: {
            selector: "//h3[contains(.,'Inspection Paid $100.00')]]",
            locateStrategy: "xpath",
        },
        checkInspect: {
            selector: "//span[@class='square-checkbox']",
            locateStrategy: "xpath",
        },
    },
    commands: [{
        pageTitle: function() {
            return this.assert.elementPresent("@appTitle")
                .click("@appTitle")
                .waitFor(1000);
        },
        inspectPurchase: function() {
            return this.assert.elementPresent("@carInspect")
                .assert.elementPresent("@inspectFee")
                .waitFor(1000)
                .click("@inspectButt")
                .waitFor(5000)
                .setValue("@carCCt", "4111111111111111")
                .click("@inpsectMonth")
                .click("@number4")
                .click("@year")
                .click("@yearNine")
                .setValue("@cvc", "444")
                .waitFor(1000)
                .click("@payNow")
                .waitFor(1000)
                .assert.elementPresent("@paidInspect")
                .assert.elementPresent("@checkInspect", "Checkbox is visible")
                .waitForElementVisible("@checkInspect", maxTime, false, function(result) {
                    this.assert.ok(result.value, "Checkbox is selected");
                });
        },
    }],
};

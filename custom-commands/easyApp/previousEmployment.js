require("../../config/environment");
const data = require("../../data/globals");

module.exports = {
    elements: {
        previousEmploymentTitle: {
            selector: "//h5[contains(.,'Previous Employment')]",
            locateStrategy: "xpath",
        },
        previousEmployment: {
            selector: "//select[@name='coBorrower1EmploymentStatus']",
            locateStrategy: "xpath",
        },
        selectSelfEmployed: {
            selector: "html/body/wfc-app/div[2]/ui-view/sba-easy-application/div/div/form/span/easy-app-borrower/section[3]/div/div[2]/div/div/div[2]/select/option[6]",
            locateStrategy: "xpath",
        },
        employerNameP: {
            selector: "//input[@name='coBorrower1CompanyName']",
            locateStrategy: "xpath",
        },
        occupationP: {
            selector: "//input[@name='coBorrower1Occupation']",
            locateStrategy: "xpath",
        },
        streetP: {
            selector: "//input[@id='coBorrower1Employment-street']",
            locateStrategy: "xpath",
        },
        zipP: {
            selector: "//input[@id='coBorrower1Employment-zip']",
            locateStrategy: "xpath",
        },
        monthsP: {
            selector: "//input[@id='coBorrower1EmploymentDuration-months']",
            locateStrategy: "xpath",
        },
        yearsP: {
            selector: "//input[@id='coBorrower1EmploymentDuration-years']",
            locateStrategy: "xpath",
        },
        employerphoneCo: {
            selector: "/html/body/wfc-app/div[2]/ui-view/sba-easy-application/div/div/form/span/easy-app-borrower/section[3]/div/div[2]/span/div[1]/div[3]/input",
            locateStrategy: "xpath",
        },
    },
    commands: [{

        coborrowerPrevious: function(text) {
            const b = data.jointCalifornia;
            return this.assert.containsText("@previousEmploymentTitle", "PREVIOUS EMPLOYMENT")
                .assert.elementPresent("@previousEmployment")
                .click("@previousEmployment")
                .waitForElementVisible("@selectSelfEmployed", 3000)
                .click("@selectSelfEmployed")
                .setValue("@employerNameP", b.employerName)
                .setValue("@occupationP", b.occupation)
                .setValue("@streetP", b.employerAddress)
                .setValue("@zipP", b.employerZip)
                .setValue("@yearsP", b.employerYears)
                .setValue("@employerphoneCo", "7143321743")
                .setValue("@monthsP", b.employerMonths);
        },
        setLivingOwn: function(text) {
            return this.assert.elementPresent("@livingSit")
                .click("@coown");
        },
        setLivingBown: function(text) {
            return this.assert.elementPresent("@livingSit")
                .click("@borrower");
        },
    }],
};

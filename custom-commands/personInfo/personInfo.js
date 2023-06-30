
module.exports = {
    url: function() {
        return this.api.launchUrl + "/sba/p2p/buyer/complete-application";
    },
    elements: {
        incomeInfo: {
            selector: "//div[contains(.,'Please tell us the source of any additional income and its duration.')]",
            locateStrategy: "xpath",
        },
        incomeSource: {
            selector: "//input[@id='additional-income[0]-source']",
            locateStrategy: "xpath",
        },
        incomeYears: {
            selector: "//input[@id='additional-income[0]-years']",
            locateStrategy: "xpath",
        },
        incomeMonths: {
            selector: "//input[@id='additional-income[0]-months']",
            locateStrategy: "xpath",
        },
        ssn: {
            selector: "//input[@name='ssn']",
            locateStrategy: "xpath",
        },
        submit: {
            selector: "//button[@type='submit']",
            locateStrategy: "xpath",
        },
        continue: {
            selector: ".continue",
        },
        currentState: {
            selector: "//select[@id='currentEmployment[0]-state']",
            locateStrategy: "xpath",
        },
        currentCity: {
            selector: "//input[@name='currentEmployment[0]-city']",
            locateStrategy: "xpath",
        },
        currentZip: {
            selector: "//input[@id='currentEmployment[0]-zip']",
            locateStrategy: "xpath",
        },
        currentEmployPhone: {
            selector: "//input[@id='currentEmployment[0]-phone']",
            locateStrategy: "xpath",
        },
        currentMonths: {
            selector: "//input[@id='currentEmployment[0]-months']",
            locateStrategy: "xpath",
        },
        currentYears: {
            selector: "//input[@id='currentEmployment[0]-years']",
            locateStrategy: "xpath",
        },
        currentJobT: {
            selector: "//input[@placeholder='Job Title']",
            locateStrategy: "xpath",
        },
        currentEmploy: {
            selector: "//input[@id='currentEmployment[0]-name']",
            locateStrategy: "xpath",
        },
        currentSelfEmploy: {
            selector: "//label[@for='currentEmployment[0]-self-employed']",
            locateStrategy: "xpath",
        },
        currentMilitary: {
            selector: "//label[@for='currentEmployment[0]-military']",
            locateStrategy: "xpath",
        },
        currentRetired: {
            selector: "//label[@for='currentEmployment[0]-retired']",
            locateStrategy: "xpath",
        },
        currentOther: {
            selector: "//label[@for='currentEmployment[0]-other']",
            locateStrategy: "xpath",
        },
        employmentTitle: {
            selector: "//h5[contains(.,'Current Employment')]",
            locateStrategy: "xpath",
        },
        currentEmployRad: {
            selector: ".col-sm-12.inline-check-boxes>label",
        },
        subContinue: {
            selector: "#missing-information > form > section.row.submit > div > button",
        },
        deskTopLogo: {
            selector: "//img[@class='desktop-logo']",
            locateStrategy: "xpath",
        },
        prevStreet: {
            selector: "//input[@id='previous-address[0]-street']",
            locateStrategy: "xpath",
        },
        prevZip: {
            selector: "//input[@id='previous-address[0]-zip']",
            locateStrategy: "xpath",
        },
        prevCity: {
            selector: "//input[@id='previous-address[0]-city']",
            locateStrategy: "xpath",
        },
        prevYears: {
            selector: "//input[@name='previous-address[0]-years']",
            locateStrategy: "xpath",
        },
        prevMonths: {
            selector: "//input[@name='previous-address[0]-months']",
            locateStrategy: "xpath",
        },
        military: {
            selector: "//label[@for='previousEmployment[0]-military']",
            locateStrategy: "xpath",
        },
        airForce: {
            selector: "//label[contains(.,' Airforce')]",
            locateStrategy: "xpath",
        },
        payGrade: {
            selector: "//option[@value='string:7']",
            locateStrategy: "xpath",
        },
        enlistDate: {
            selector: "//input[@id='previousEmployment[0]-enlisted-date']",
            locateStrategy: "xpath",
        },
        profTitle: {
            selector: "//input[@id='previousEmployment[0]-professional-title']",
            locateStrategy: "xpath",
        },
        prevPay: {
            selector: "//select[@id='previousEmployment[0]-pay-grade']",
            locateStrategy: "xpath",
        },
    },
    commands: [{
        personInfo: function() {
            return this
                .assert.elementPresent("@deskTopLogo")
                .setValue("@ssn", "666470781")
            // previous address
                .setValue("@prevZip", "22091")
                .setValue("@prevStreet", "2262 Cocquina Drive")
                .setValue("@prevYears", "4")
                .setValue("@prevMonths", "7")
                .click("@employmentTitle")
                .waitFor(1000)
                .click("@currentEmployRad")
                .waitFor(1000)
                .setValue("@currentEmploy", "AOL")
                .setValue("@currentJobT", "Engineer")
                .setValue("@currentEmployPhone", "(949) 727-9999")
                .setValue("@currentZip", "92612")
                .waitFor(1000)
                .assert.visible("@currentCity", "Irvine")
                .assert.visible("@currentState", "number:5")
            // previous employment
                .click("@military")
                .click("@airForce")
                .click("@prevPay")
                .waitFor(1000)
                .click("@payGrade")
                .setValue("@enlistDate", "01/24/2012")
                .setValue("@profTitle", "Mr. Airforce Man");
        },
    }],
};

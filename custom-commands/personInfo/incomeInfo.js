
module.exports = {
    url: function() {
        return this.api.launchUrl + "/sba/dealer/buyer/complete-application";
    },
    elements: {
        addIncomeNote: {
            selector: "//div[@class='body2 body2-visible spacer--bottom-10']",
            locateStrategy: "xpath",
        },
        bssn: {
            selector: "//input[@id='BORROWER-PERSONAL-0-ssn']",
            locateStrategy: "xpath",
        },
        borrowInfoText: {
            selector: "//div[@class='body2 body2-visible spacer--bottom-10']",
            locateStrategy: "xpath",
        },
        borrowIncome: {
            selector: "//input[@id='BORROWER-ADDITIONAL_INCOME-2-source']",
            locateStrategy: "xpath",
        },
        borrowIncomeYears: {
            selector: "//input[@id='BORROWER-ADDITIONAL_INCOME-2-years']",
            locateStrategy: "xpath",
        },
        borrowIncomeMonths: {
            selector: "//input[@id='BORROWER-ADDITIONAL_INCOME-2-months']",
            locateStrategy: "xpath",
        },
        addIncome: {
            selector: "//h1[contains(.,'Additional Information')]",
            locateStrategy: "xpath",
        },
        coIncomeInfoText: {
            selector: "//div[@class='body2 body2-visible spacer--bottom-10']",
            locateStrategy: "xpath",
        },
        coIncomeSource: {
            selector: "//input[@id='CO_BORROWER-ADDITIONAL_INCOME-2-source']",
            locateStrategy: "xpath",
        },
        coIncomeYears: {
            selector: "//input[@id='CO_BORROWER-ADDITIONAL_INCOME-2-years']",
            locateStrategy: "xpath",
        },
        coIncomeMonths: {
            selector: "//input[@id='CO_BORROWER-ADDITIONAL_INCOME-2-months']",
            locateStrategy: "xpath",
        },
        deskTopLogo: {
            selector: "//img[@class='desktop-logo']",
            locateStrategy: "xpath",
        },
        continue: {
            selector: ".continue",
        },
        back: {
            selector: ".back-button-label",
        },
        borrowIncSource: {
            selector: "#BORROWER-ADDITIONAL_INCOME-3-source",
        },
        borrowIncYears: {
            selector: "#BORROWER-ADDITIONAL_INCOME-3-years",
        },
        borrowIncMonths: {
            selector: "#BORROWER-ADDITIONAL_INCOME-3-months",
        },
        mExpense: {
            selector: "#borrowerLivingSituation-monthlyExpense",
        },
        bIncMonths: {
            selector: "#borrowerIncome-months",
        },
        bIncYears: {
            selector: "#borrowerIncome-years",
        },
        bGrossInc: {
            selector: "#borrowerIncome-grossMonthlyIncome",
        },
        bAddInc: {
            selector: "#borrowerIncome-additionalIncome",
        },

    },
    commands: [{
        addIncomeText: function() {
            return this
                .assert.elementPresent("@addIncome")
                .getText("@coIncomeInfoText", function(result) {
                    this.assert.equal(typeof result, "object");
                    this.assert.equal(result.status, 0);
                    this.assert.equal(result.value, "Note: You are not required to reveal alimony, child support or separate maintenance income if you don't want it to be considered as a basis for repaying this obligation.");
                });
        },
        addIncomeBor: function() {
            return this
                .assert.elementPresent("@deskTopLogo")
                .setValue("@borrowIncSource", "Alimony")
                .setValue("@borrowIncYears", "3")
                .setValue("@borrowIncMonths", "2");
        },
        addIncomeBor_: function() {
            return this
                .assert.elementPresent("@deskTopLogo")
                .setValue("@borrowIncome", "Alimony")
                .setValue("@borrowIncomeYears", "3")
                .setValue("@borrowIncomeMonths", "2");
        },
        addIncomeBorT: function() {
            return this
                .assert.elementPresent("@deskTopLogo")
                .setValue("@borrowIncSource", "Alimony")
                .setValue("@borrowIncYears", "3")
                .setValue("@borrowIncMonths", "2");
        },
        addIncomeCo: function() {
            return this
                .assert.elementPresent("@coIncomeSource")
                .setValue("@coIncomeSource", "Dog Walker")
                .setValue("@coIncomeYears", "2")
                .setValue("@coIncomeMonths", "7")
                .assert.elementPresent("@back")
                .click("@continue").waitFor(3000);
        },
    }],
};

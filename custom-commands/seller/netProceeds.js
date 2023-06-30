
module.exports = {
    url: function() {
        return this.api.launchUrl + "/sba/p2p/seller/net-proceeds";
    },

    elements: {
        subTitle: {
            selector: ".sub-title",
        },
        netTitle: {
            selector: ".col-md-12 > .title",
        },
        moneyGreen: {
            selector: ".cash-money.green",
        },
        disburse: {
            selector: ".disbursement-label",
        },
        nextTitle: {
            selector: "#next-steps > .title",
        },
        nextText: {
            selector: "#next-steps",
        },
        saveC: {
            selector: "//button[contains(.,'Save & Continue')]",
            locateStrategy: "xpath",
        },
        netSubTitle: {
            selector: "//h5[@class='sub-title ng-scope ng-binding']",
            locateStrategy: "xpath",
        },
        electronicText: {
            selector: "//*[@id='next-steps']/h5",
            locateStrategy: "xpath",
        },
    },
    commands: [{
        netProceeds: function(amount) {
            amount = amount || "$28,500";
            return this.assert.elementPresent("@subTitle")
                .assert.containsText("@netTitle", "Here is your Disbursement Summary")
                .assert.containsText("@moneyGreen", amount)
                .assert.containsText("@disburse", "Sales Price")
                .assert.containsText("@nextTitle", "Electronic Signature Required")
                .assert.containsText("@nextText", "Before your closing appointment,");
        },
        netProceedsSum: function(amount) {
            amount = "$13,000";
            return this.assert.elementPresent("@subTitle")
                .assert.containsText("@netTitle", "Here is your Disbursement Summary")
                .assert.containsText("@netSubTitle", "During the onsite closing, as soon as you and the buyer have completed signing all required loan closing documents, you will instantly receive an e-check for the net proceeds amount below. Simply print, sign, and deposit this check with your financial institution.")
                .assert.containsText("@moneyGreen", amount)
                .assert.containsText("@disburse", "Sales Price")
                .assert.containsText("@nextTitle", "Electronic Signature Required")
                .assert.containsText("@electronicText", "Before your closing appointment, you will receive an email with a link to electronically sign documents. This is in addition to the in-person signing with the notary. It can take up to 1 business day to receive this email, so please feel free to log out while you wait.")
                .assert.containsText("@nextText", "Before your closing appointment,")
                .waitFor(1000);
        },
        _netProceeds: function(amount) {
            this
                .assert.elementPresent("@subTitle")
                .assert.containsText("@netTitle", "Here is your Disbursement Summary")
                .assert.containsText("@moneyGreen", amount)
                .assert.containsText("@disburse", "Sales Price")
                .assert.containsText("@nextTitle", "Electronic Signature Required")
                .assert.containsText("@nextText", "Before your closing appointment,")
                .waitFor(1000);
            return this;
        },
    }],
};

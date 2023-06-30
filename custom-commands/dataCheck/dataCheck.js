
module.exports = {
    url: function() {
        return this.api.launchUrl;
    },
    elements: {
        topLogo: {
            selector: ".desktop-logo",
        },
        loanData: {
            selector: "//div[contains(.,'Monthly Payment$470.022013 Ford Explorer$28,500.00Total Price$26,376.50Down Payment$0.00Term Duration72 moAPR9.253%')]",
            locateStrategy: "xpath",
        },
        creditScore: {
            selector: "//div[@class='col-sm-12 message-wrap body2 spacer--bottom-5 blue']",
            locateStrategy: "xpath",
        },
        deskTopLogo: {
            selector: ".desktop-logo",
        },
    },
    commands: [{
        verifyLoanData: function() {
            return this.assert.elementPresent("@deskTopLogo")
                .getText("@loanData", function(result) {
                    this.assert.equal(typeof result, "object");
                    this.assert.equal(result.status, 0);
                    this.assert.equal(result.value, "");
                });
        },
    }],
};

const _ = require("lodash");
let colors = require("colors");
// const o = require("../../data/globalinfo");
// const object_ = o.object;
// const remove = o.object_remove;

module.exports = {
  url: function() {
    return this.api.launchUrl + "/sba/refi/vehicle-color";
  },
  elements: {
    deskLogo: {
      selector: ".desktop-logo",
    },
    title: {
      selector: "//h1[@class='title ng-binding']",
      locateStrategy: "xpath",
    },
    copyOfLoanText: {
      selector: "//*[@id='account-summary']/section/div[3]/document-list/summary-pane/div/div/h3",
      locateStrategy: "xpath",
    },
    copyOfLoanSubText: {
      selector: "//h4[@ng-if='!$ctrl.documents.length']",
      locateStrategy: "xpath",
    },
    manageMyLoan: {
      selector: "//h3[@class='spacer--bottom-20 ng-binding']",
      locateStrategy: "xpath",
    },
    manageMyLoanSubText: {
      selector: "//p[@class='spacer--bottom-20']",
      locateStrategy: "xpath",

    },
    checkBackButton: {
      selector: "//button[@class='button--md ng-binding']",
      locateStrategy: "xpath",

    },
    firstPayment: {
      selector: "//*[@id='account-summary']/section/div[1]/summary-pane/div/div/ng-transclude/div/div[1]/h2",
      locateStrategy: "xpath",

    },
    paymentAmount: {
      selector: "//*[@id='account-summary']/section/div[1]/summary-pane/div/div/ng-transclude/div/div[2]/h2",
      locateStrategy: "xpath",

    },
    loanAmount: {
      selector: "//*[@id='account-summary']/section/div[1]/summary-pane/div/div/ng-transclude/div/div[3]/h2",
      locateStrategy: "xpath",
    },
    term: {
      selector: "//*[@id='account-summary']/section/div[1]/summary-pane/div/div/ng-transclude/div/div[4]/h2",
      locateStrategy: "xpath",
    },

  },
  commands: [{
    accountSummarySum: function(data, done) {
      let firstPayment= data[0];
      let pamount = data[1];
      let lamount = data[2];
      let term = data[3];
      this
        .assert.elementPresent("@deskLogo")
        .assert.elementPresent("@title")
        .assert.containsText("@title", "My Account Summary")
        .getText("@copyOfLoanText", function(result) {
          this.assert.equal(result.value, "Copy of Your Loan Documents");
        })
        .assert.elementPresent("@manageMyLoan")
        .getText("@manageMyLoanSubText", function(result) {
          this.assert.equal(result.value, "Hang tight! We're setting up your account online. It takes us about 1 business day to get you up and running.");
        })
        .assert.elementPresent("@checkBackButton")
        .getText("@firstPayment", function(result) {
          this.assert.equal(result.value, firstPayment);
        })
        .getText("@paymentAmount", function(result) {
          this.assert.equal(result.value, pamount);
        })
        .getText("@loanAmount", function(result) {
          this.assert.equal(result.value, lamount);
        })
        .getText("@term", function(result) {
          this.assert.equal(result.value, term+ " mo.");
          done();
        });

      return this;
    },
  }],
};


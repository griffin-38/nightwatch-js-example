module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    tradeInMileage: {
      selector: "//input[@id='tradeinMileage']",
      locateStrategy: "xpath",
    },
    tradeInTrim: {
      selector: ".//*[@id='tradeinTrim']",
      locateStrategy: "xpath",
    },
    tradeInModel: {
      selector: ".//*[@id='tradeinModel']",
      locateStrategy: "xpath",
    },
    tradeInMake: {
      selector: ".//*[@id='tradeinMake']",
      locateStrategy: "xpath",
    },
    tradeInYear: {
      selector: ".//*[@id='tradeinYear']",
      locateStrategy: "xpath",
    },
    hasTradeYes: {
      selector: "//label[@for='has-trade-in-yes']",
      locateStrategy: "xpath",
    },
    hasTradeYes_: {
      selector: "//label[@for='has-trade-in-yes']",
      locateStrategy: "xpath",
    },
    tradeText: {
      selector: "//div[contains(.,'Are you trading in a vehicle?')]",
      locateStrategy: "xpath",
    },
    tradeInHeader: {
      selector: "//h5[contains(.,'Trade In')]",
      locateStrategy: "xpath",
    },
    hasTradeNo: {
      selector: "//label[@for='has-trade-in-no']",
      locateStrategy: "xpath",
    },
    tradeInYear_: {
      selector: "#tradeinYear",
    },
    tradeInMake_: {
      selector: "#tradeinMake",
    },
    tradeInModel_: {
      selector: "#tradeinModel",
    },
    tradeInTrim_: {
      selector: "#tradeinTrim",
    },
    tradeInMileage_: {
      selector: "#tradeinMileage",
    },
    model_id: {
      selector: ".//*[@id='tradeinModel']/option[3]",
      locateStrategy: "xpath",
    },
    trims: {
      selector: ".//*[@id='tradeinTrim']/option[7]",
      locateStrategy: "xpath",
    },
    make_: {
      selector: ".//*[@id='tradeinMake']/option[8]",
      locateStrategy: "xpath",
    },
    model_id_: {
      selector: "#tradeinModel > option:nth-child(3)",
    },
    _trim: {
      selector: "#tradeinTrim > option:nth-child(7)",
    },
    _make: {
      selector: "#tradeinTrim > option:nth-child(9)",
    },
    m: {
      selector: "//div[contains(.,'Make')]",
      locateStrategy: "xpath",
    },
    mo: {
      selector: "//div[contains(.,'Model')]",
      locateStrategy: "xpath",
    },
    tr: {
      selector: "//div[contains(.,'Trim')]",
      locateStrategy: "xpath",
    },
    yr: {
      selector: "//select[@id='tradeinYear']",
      locateStrategy: "xpath",
    },
    trYear: {
      selector: "#tradeinYear > option:nth-child(6)",
    },
    trYear_: {
      selector: ".//*[@id='tradeinYear']/option[6]",
      locateStrategy: "xpath",
    },
    whatVehicleText: {
      selector: "//div[contains(.,'What vehicle are you trading in?')]",
      locateStrategy: "xpath",
    },
    areYouTrade: {
      selector: "//div[contains(.,'Are you trading in a vehicle?')]",
      locateStrategy: "xpath",
    },
    youTradeYes: {
      selector: "//label[@ng-click='$ctrl.hasTradeIn = true']",
      locateStrategy: "xpath",
    },
    youTradeNo: {
      selector: "//label[@ng-click='$ctrl.clearAll()']",
      locateStrategy: "xpath",
    },
    tradeInHeaders: {
      selector: "//h5[contains(.,'Trade In')]",
      locateStrategy: "xpath",
    },
  },
  commands: [{
    tradeInRadios: function(selector) {
      let self = this;
      this
        .waitForElementVisible("@tradeInHeaders", 3000)
        .click(selector, function(clickStatus) {
          self.click(selector);
          self.waitForElementVisible("@whatVehicleText", 3000);
          console.log(clickStatus.status);
        });

      return this;
    },
    tradeInRadio: function() {
      this
        .waitForElementVisible("@hasTradeYes", 3000)
        .click("@hasTradeYes", function(clickStatus) {
          console.log(clickStatus.status);
        });

      return this;
    },
    changeTradeIn: function(year, make, model) {
      this
        .waitForElementVisible(".body2-visible", 1000)
        .click("@hasTradeYes_")
        .waitFor(1000)
        .setValue("@tradeInYear_", year)
        .waitFor(1000)
        .click("@tradeInMake_")
        .waitFor(1000)
        .click(make)
        .waitFor(1000)
        .click("@tradeInModel_")
        .waitFor(1000)
        .click(model);
    },
    hasTradeIn: function(year, make, model, trim, miles) {
      this
        .setValue("@tradeInYear_", year)
        .waitFor(2000)
        .click("@tradeInMake_")
        .waitFor(2000)
        .click(make)
        .waitFor(2000)
        .click("@tradeInModel_")
        .waitFor(2000)
        .click(model)
        .waitFor(2000)
        .click("@tradeInTrim_")
        .waitFor(2000)
        .click(trim)
        .waitFor(2000)
        .setValue("@tradeInMileage_", miles);

      return this;
    },
    hasTradeInMobile: function(miles) {
      this
        .waitForElementVisible(".body2-visible", 1000)
        .click("@hasTradeYes_")
        .waitFor(1000)
        .waitForElementVisible("@yr", 2000)
        .click("@tradeInYear_")
        .waitFor(1000)
        .click("@trYear")
        .waitForElementVisible("@tradeInMake", 2000)
        .click("@tradeInMake_")
        .waitFor(1000)
        .click("@make_")
        .waitForElementVisible("@tradeInModel", 2000)
        .click("@tradeInModel_")
        .waitFor(1000)
        .click("@model_id")
        .waitForElementVisible("@tradeInTrim", 2000)
        .click("@tradeInTrim_")
        .waitForElementVisible("@trims", 2000)
        .click("@trims")
        .waitForElementVisible("@tradeInMileage_", 2000)
        .setValue("@tradeInMileage_", miles);
    },
    hasTradeInNo: function() {
      this
        .assert.elementPresent("@tradeInHeader")
        .assert.containsText("@tradeText", "Are you trading in a vehicle?")
        .click("@hasTradeNo");
    },
  }],
};

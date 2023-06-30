
module.exports = {
  url: function() {
    return this.api.launchUrl + "/sba/purchase/buyer/loan-configurator";
  },
  elements: {
    paySlider: {
      selector: "//*[@id='loan-configurator']/section[2]/div/div[2]/sba-purchase-loan-sliders/div/div[3]/sba-slider/div/span[1]",
      locateStrategy: "xpath",
    },
    termSlider: {
      selector: ".//*[@id='loan-configurator']/section[2]/div/div[2]/sba-purchase-loan-sliders/div/div[4]/sba-slider/div/span[2]",
      locateStrategy: "xpath",
    },
    dest: {
      selector: "//*[@id='loan-configurator']/section[2]/div/div[2]/sba-purchase-loan-sliders/div/div[3]/sba-slider/div/span[3]",
      locateStrategy: "xpath",
    },
    source: {
      selector: "//*[@id='loan-configurator']/section[2]/div/div[2]/sba-purchase-loan-sliders/div/div[3]/sba-slider/div/span[3]",
      locateStrategy: "xpath",
    },
    term: {
      selector: "//span[@tabindex='0']",
      locateStrategy: "xpath",
    },
    valueNow: {
      selector: "//span[contains(.,'48 months')]",
      locateStrategy: "xpath",
    },
    valueNow2: {
      selector: "//div[contains(.,'$283.89/mo')]",
      locateStrategy: "xpath",
    },
    termDur: {
      selector: "//span[contains(.,'Term Duration')]",
      locateStrategy: "xpath",
    },
    totalPrice: {
      selector: "//div[contains(.,'$9,500.00')]",
      locateStrategy: "xpath",
    },
    downPay: {
      selector: "//div[contains(.,'$154.73/mo')]",
      locateStrategy: "xpath",
    },
    dest1: {
      selector: "//*[@id='loan-configurator']/section[2]/div/div[2]/sba-purchase-loan-sliders/div/div[4]/sba-slider/div/span[3]",
      locateStrategy: "xpath",
    },
    dest2: {
      selector: "//*[@id='loan-configurator']/section[2]/div/div[2]/sba-purchase-loan-sliders/div/div[4]/sba-slider/div/span[3]",
      locateStrategy: "xpath",
    },
    monthlyAmount: {
      selector: ".//*[@id='loan-configurator']/section[2]/div/div[1]/loan-sliders/div/div[1]/div/div",
      locateStrategy: "xpath",
    },
    aprAmount: {
      selector: ".//*[@id='loan-configurator']/section[2]/div/div[1]/loan-sliders/div/div[2]/div/div/span",
      locateStrategy: "xpath",
    },
    downAmount: {
      selector: ".loan-sliders > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)",
    },
    downSource: {
      selector: ".//*[@id='loan-configurator']/section[2]/div/div[1]/loan-sliders/div/div[3]/div/loan-slider/div/span[3]",
      locateStrategy: "xpath",
    },
    termSourceValue: {
      selector: ".//*[@id='loan-configurator']/section[2]/div/div[1]/loan-sliders/div/div[4]/div/loan-slider/div/span[3]",
      locateStrategy: "xpath",
    },
    monthSliderValue: {
      selector: ".//*[@id='loan-configurator']/section[2]/div/div[1]/loan-sliders/div/div[4]/div/div[1]/span[2]",
      locateStrategy: "xpath",
    },
    downSlider: {
      selector: ".//*[@id='loan-configurator']/section[2]/div/div[1]/loan-sliders/div/div[3]/div/div[1]/span[2]",
      locateStrategy: "xpath",
    },
    loanAmountSlider: {
      selector: ".//*[@id='price-summary']/div[9]/div[2]",
      locateStrategy: "xpath",
    },
    totalDown: {
      selector: "//*[@id='price-summary']/div[8]/div[2]",
      locateStrategy: "xpath",
    },
    termMonths: {
      selector: "//*[@id='loan-configurator']/section[2]/div/div[1]/loan-sliders/div/div[4]/div/div[1]/span[2]",
      locateStrategy: "xpath",
    },
    deskLogo: {
      selector: ".desktop-logo",
    },
  },
  commands: [{
    sliderDataCheck: function(apr, down, term) {
      this
        .assert.elementPresent("@deskLogo")
        .assert.containsText("@aprAmount", apr) // "6.18%")
        .assert.containsText("@downAmount", down) // "$14,250")
        .assert.containsText("@termMonths", term); // 72

      return this;
    },
    loanConfigSlider: function() {
      return this
        .assert.elementPresent("@dest2")
        .moveToElement("@dest2", 10, 10)
        .mouseButtonDown(0)
        .pause(500)
        .moveToElement("@dest1", 307, 0)
        .mouseButtonUp(0)
        .waitFor(2000)
        .assert.elementPresent("@downPay");
    },
    loanConfigS: function() {
      this
        .waitForElementVisible("body", 2000, "Be sure that the page is loaded")
        .execute("scrollTo(307, 0)")
        .assert.elementPresent("@source")
        .assert.elementPresent("@dest2")
        .end();
    },
  }],
};

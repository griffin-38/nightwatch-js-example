require("../../config/environment");
const data = require("../../data/globals");

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    notesCss: {
      selector: "#notes",
    },
    notes: {
      selector: "//input[@id='notes']",
      locateStrategy: "xpath",
    },
    street: {
      selector: "//input[@id='street']",
      locateStrategy: "xpath",
    },
    city: {
      selector: "//input[@id='city']",
      locateStrategy: "xpath",
    },
    state: {
      selector: "//select[@id='state']",
      locateStrategy: "xpath",
    },
    zip: {
      selector: "//input[@id='zip']",
      locateStrategy: "xpath",
    },
    street2: {
      selector: "#borrower0Address-street2",
    },
    streets: {
      selector: "#borrower0Address-street",
    },
    street_appoint: {
      selector: "//input[@id='street']",
      locateStrategy: "xpath",
    },
    stateS: {
      selector: "#borrower0Address-state",
    },
    duratYears: {
      selector: "#borrower0AddressDuration-years",
    },
    duratMonths: {
      selector: "#borrower0AddressDuration-months",
    },
    zip_: {
      selector: "#borrower0Address-zip",
    },
    county: {
      selector: "//input[@id='county']",
      locateStrategy: "xpath",
    },
    continue: {
      selector: "#schedule-appointment > section:nth-child(3) > div > div > button",
    },
    deskTopLogo: {
      selector: ".desktop-logo",
    },
    flStreet: {
      selector: ".//*[@id='appointment']/div/div/div[2]/div[2]",
      locateStrategy: "xpath",
    },
    address: {
      selector: "//h5[contains(.,'Address')]",
      locateStrategy: "xpath",
    },
    _county: {
      selector: "//input[@id='county']",
      locateStrategy: "xpath",
    },
    jointDate: {
      selector: "//div[contains(.,' Fri 3/31 02:00 PM')]",
      locateStrategy: "xpath",
    },
    jointAdd: {
      selector: "//div[contains(.,' 11110 Braes Forest Dr, Houston, TX 77071')]",
      locateStrategy: "xpath",
    },
    streetFull: {
      selector: "div.global-line-height:nth-child(2)",
    },
    appTitle: {
      selector: ".appointment-title",
    },
    county_: {
      selector: "#borrower0Address-county",
    },
    yearsAt: {
      selector: "#borrower0AddressDuration-years",
    },
    monthsAt: {
      selector: "#borrower0AddressDuration-months",
    },
    electronicSign: {
      selector: "#next-steps > h3",
    },
    electronicSignText: {
      selector: "#next-steps > h5",
    },

  },

  commands: [{
    assertAppoint: function() {
      this
        .waitForElementVisible("body", 5000)
        .setValue("@notes", "Do not forget your docs")
        .getValue("@street", function(result) {
          this.assert.equal(result.value, "7922 W Gold Dust Ave");
        });

      return this;
    },
    appointAddress: function(address) {
      this
        .getValue("@street_appoint", function(result) {
          this.assert.equal(result.value, address);
        });

      return this;
    },
    assertAppointDeal: function() {
      return this.assert.elementPresent("@appTitle")
        .getValue("@streets", function(result) {
          this.assert.equal(result.value, "4100 Jamboree Rd");
        });
    },
    assertAppDealFL: function() {
      return this.assert.elementPresent("@deskTopLogo")
        .getText("@flStreet", function(result) {
          this.assert.equal(result.value, "905 Jamboree, Irvine, CA 92612");
        });
    },
    setAddress: function() {
      return this.assert.elementPresent("@deskTopLogo")
        .click("@notes")
        .waitFor(1000);
    },
    setEasyAdd: function() {
      const a = data.p2d;
      return this.assert.elementPresent("@address")
        .setValue("@street", a.address)
        .setValue("@zip", a.zip)
        .waitFor(1000)
        .getValue("@county", function(result) {
          this.assert.equal(result.value, a.county);
        });
    },
    setEasyAddP: function() {
      const a = data.p2p_angela;
      return this.assert.elementPresent("@address")
        .setValue("@street", a.address)
        .setValue("@zip", a.zip)
        .waitFor(1000)
        .getValue("@county", function(result) {
          this.assert.equal(result.value, a.county);
        });
    },
    setAddressE: function(street, zip, county) {
      let a = data.purchaseSsn;
      county = a.county;

      return this.assert.elementPresent("@deskTopLogo")
        .setValue("@streets", street)
        .setValue("@zip_", zip)
        .waitFor(2000)
        .getValue("@county_", function(result) {
          this.assert.equal(result.value, county);
        });
    },
    setYearsAt: function(data) {
      this
        .waitFor(1000)
        .setValue("@yearsAt", data)
        .setValue("@monthsAt", data);

      return this;
    },
    electronicTextDealer: function() {
      return this.assert.elementPresent("@electronicSign")
        .getText("@electronicSignText", function(result) {
          this.assert.equal(result.value, "Once we have received all the required loan documents from the dealership, we will send you the 'Loan Documents Are Ready' notification with a link to review and eSign. It's easy!");
        });
    },
    electronicTextSum: function() {
      return this.assert.elementPresent("@electronicSign")
        .getText("@electronicSignText", function(result) {
          this.assert.equal(result.value, "Before your closing appointment, you will receive an email with a link to electronically sign some of your loan documents. This is in addition to the in-person signing with the notary. It can take up to 1 business day to receive this email, so please feel free to log out while you wait.");
        });
    },
  }],
};

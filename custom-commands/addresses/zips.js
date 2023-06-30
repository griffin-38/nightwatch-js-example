require("../../config/environment");
const colors = require("colors");

module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    bstreet: {
      selector: "#borrower0Address-street",
    },
    bstreet2: {
      selector: "#borrower0Address-street2",
    },
    bzip: {
      selector: "#borrower0Address-zip",
    },
    bcity: {
      selector: "#borrower0Address-city",
    },
    bstate: {
      selector: "#borrower0Address-state",
    },
    bcounty: {
      selector: "#borrower0Address-county",
    },
    byears: {
      selector: "#borrower0Address-durationYears",
    },
    bmonths: {
      selector: "#borrower0Address-durationMonths",
    },
    deskTopLogo: {
      selector: ".desktop-logo",
    },
    coBorrow: {
      selector: "//h1[contains(.,'Co-borrower')]",
      locateStrategy: "xpath",
    },
    address: {
      selector: "//h5[contains(.,'Address')]",
      locateStrategy: "xpath",
    },
    coStreet: {
      selector: "//input[@id='coBorrower0Address-street']",
      locateStrategy: "xpath",
    },
    coStreet2: {
      selector: "//input[@id='coBorrower0Address-street2']",
      locateStrategy: "xpath",
    },
    coZip: {
      selector: "//input[@id='coBorrower0Address-zip']",
      locateStrategy: "xpath",
    },
    coCounty: {
      selector: "//input[@id='coBorrower0Address-county']",
      locateStrategy: "xpath",
    },
  },
  commands: [{
    validateZip: function Validate(county, zipCode) {
      this
        .getCounty(zipCode);

      this.getValue("@bcounty", function(result) {
        console.log(colors.green(" ✔"), "Zip Code:".yellow, zipCode);
        if (result.value === "") {
          console.log(colors.yellow(" ⥤"), "Retrying once...");
          this
            .getCounty(zipCode)
            .waitForAngular("");
        }
      });
      this
        .expect.element("@bcounty").to.have.value.equal(county);
    },
    // loanType & sellerType
    checkZips: function() {
      let object = require("../../data/dataInfo/excelFileZips.js");
      let saintlouiscity = object[0].length; // 39
      let saintlouis = object[1].length; // 9
      let baltimore = object[2].length; // 6
      let baltimorecity = object[3].length; // 39
      let annarundel = object[4].length; // 2

      let startbaltimore = saintlouiscity + saintlouis; // 48
      let startbaltimorecity = startbaltimore + baltimore; // 54
      let startanne = startbaltimorecity + baltimorecity; // 93
      let endanne = startanne + annarundel; // 95

      let zips = [].concat(...object);
      // zips now holds single array of just the values of object
      for (let i = 0; i < saintlouiscity; i++) {
        this.assert.elementPresent("@bzip")
          .clearValue("@bzip")
          .clearValue("@bcounty")
          .setValue("@bzip", zips[i])
          .waitFor(1000)
          .assert.valueContains("@bcounty", "St. Louis City")
          .waitFor(1000);
      }
      for (let i = saintlouiscity; i < startbaltimore; i++) {
        this.assert.elementPresent("@bzip")
          .clearValue("@bzip")
          .clearValue("@bcounty")
          .setValue("@bzip", zips[i])
          .waitFor(1000)
          .assert.valueContains("@bcounty", "St. Louis")
          .waitFor(1000);
      }
      for (let i = startbaltimore; i < startbaltimorecity; i++) {
        this.assert.elementPresent("@bzip")
          .clearValue("@bzip")
          .clearValue("@bcounty")
          .setValue("@bzip", zips[i])
          .waitFor(1000)
          .assert.valueContains("@bcounty", "Baltimore")
          .waitFor(1000);
      }
      for (let i = startbaltimorecity; i < startanne; i++) {
        this.assert.elementPresent("@bzip")
          .clearValue("@bzip")
          .clearValue("@bcounty")
          .setValue("@bzip", zips[i])
          .waitFor(1000)
          .assert.valueContains("@bcounty", "Baltimore City")
          .waitFor(1000);
      }
      for (let i = startanne; i < endanne; i++) {
        this.assert.elementPresent("@bzip")
          .clearValue("@bzip")
          .clearValue("@bcounty")
          .setValue("@bzip", zips[i])
          .waitFor(1000)
          .assert.valueContains("@bcounty", "Anne Arundel")
          .waitFor(1000);
      }
    },
    errors: function iter(elems) {
      elems.value.forEach(function(element) {
        this.elementIdText(element.ELEMENT, function(result) {
          this.assert.equal(result.value, "Field is required");
          this.elements("xpath", "@errorRequired", iter);
        });
      });
    },
  }],
};

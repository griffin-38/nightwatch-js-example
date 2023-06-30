module.exports = {

  url: function () {
    return this.api.launchUrl + "/sba/p2p/buyer/seller-details";
  },
  elements: {
    sellerVehicle: {
      selector: "//button[contains(.,'Account Type: SellerVehicle: 2013 Ford Explorer ')]",
      locateStrategy: "xpath",
    },
    salePrice: {
      selector: "//div[contains(.,'Sales Price Correct?')]",
      locateStrategy: "xpath",
    },
    leaseVehicle: {
      selector: "//div[contains(.,'Leased vehicle?')]",
      locateStrategy: "xpath",
    },
    vin: {
      selector: "//input[@id='vin']",
      locateStrategy: "xpath",
    },
    // radio buttons s
    syes: {
      selector: ".//*[@id='vehicleDetails']/section[1]/div/div[2]/div[2]/div[2]/couplet-checkbox-input/div/label[1]/span",
      locateStrategy: "xpath",
    },
    sno: {
      selector: ".//*[@id='vehicleDetails']/section[1]/div/div[2]/div[2]/div[2]/couplet-checkbox-input/div/label[2]/span",
      locateStrategy: "xpath",
    },
    // radio buttons s
    lyes: {
      selector: ".//*[@id='vehicleDetails']/section[1]/div/div[2]/div[2]/div[3]/couplet-checkbox-input/div/label[1]/span",
      locateStrategy: "xpath",
    },
    lno: {
      selector: ".//*[@id='vehicleDetails']/section[1]/div/div[2]/div[2]/div[3]/couplet-checkbox-input/div/label[2]/span",
      locateStrategy: "xpath",
    },
    outstanding: {
      selector: ".//*[@id='vehicleDetails']/section[2]/div/div[2]/radio-input[1]/label/div[1]/span",
      locateStrategy: "xpath",
    },
    clean: {
      selector: ".//*[@id='vehicleDetails']/section[2]/div/div[2]/radio-input[2]/label/div[1]/span",
      locateStrategy: "xpath",
    },
    average: {
      selector: ".//*[@id='vehicleDetails']/section[2]/div/div[2]/radio-input[3]/label/div[1]/span",
      locateStrategy: "xpath",
    },
    rough: {
      selector: ".//*[@id='vehicleDetails']/section[2]/div/div[2]/radio-input[4]/label/div[1]/span",
      locateStrategy: "xpath",
    },
    damaged: {
      selector: ".//*[@id='vehicleDetails']/section[2]/div/div[2]/radio-input[5]/label/div[1]/span",
      locateStrategy: "xpath",
    },
    hyes: {
      selector: ".//*[@id='vehicleDetails']/section[3]/div/div[2]/couplet-checkbox-input/div/label[1]/span",
      locateStrategy: "xpath",
    },
    hno: {
      selector: ".//*[@id='vehicleDetails']/section[3]/div/div[2]/couplet-checkbox-input/div/label[2]/span",
      locateStrategy: "xpath",
    },
    // sections
    vehicleCond: {
      selector: "//h5[contains(.,'Vehicle Condition')]",
      locateStrategy: "xpath",
    },
    vehicleDet: {
      selector: "//h5[contains(.,'Vehicle Details')]",
      locateStrategy: "xpath",
    },
    lienHold: {
      selector: "//h5[contains(.,'Lienholder')]",
      locateStrategy: "xpath",
    },
    // save button
    saveDet: {
      selector: "//button[contains(.,'Save & Continue')]",
      locateStrategy: "xpath",
    },
    // seller details page
    whoSell: {
      selector: "//h1[contains(.,'Who is selling you the car?')]",
      locateStrategy: "xpath",
    },
    sellName: {
      selector: "//input[@id='firstName']",
      locateStrategy: "xpath",
    },
    sellLastName: {
      selector: "//input[@name='lastName']",
      locateStrategy: "xpath",
    },
    sellPhone: {
      selector: "//input[@name='phone']",
      locateStrategy: "xpath",
    },
    sellPhoneC: {
      selector: "#phone",
    },
    sellEmail: {
      selector: "//input[@id='email']",
      locateStrategy: "xpath",
    },
    sellAddKnown: {
      selector: "//label[@for='seller-address-known-yes']",
      locateStrategy: "xpath",
    },
    sellStreet: {
      selector: "//input[@id='street']",
      locateStrategy: "xpath",
    },
    sellZip: {
      selector: "//input[@id='zip']",
      locateStrategy: "xpath",
    },
    sellCity: {
      selector: "//input[@id='city']",
      locateStrategy: "xpath",
    },
    sellState: {
      selector: "//select[@id='state']",
      locateStrategy: "xpath",
    },
    stateValue: {
      selector: "#state option[value='number:5']",
    },
    dealerStateCa: {
      selector: "option[value='number:5']",
    },
    submit: {
      selector: "//button[@type='submit']",
      locateStrategy: "xpath",
    },
    cssdName: {
      selector: "#dealerName",
    },
    csssales: {
      selector: "#salesPerson",
    },
    cssemail: {
      selector: "#email",
    },
    cssphone: {
      selector: "#phone",
    },
    cssstreet: {
      selector: "#street",
    },
    csszip: {
      selector: "#zip",
    },
    csscity: {
      selector: "#city",
    },
    cssstate: {
      selector: "#state",
    },
    deskTopLogo: {
      selector: ".desktop-logo",
    },

  },
  commands: [{
    texSellerInfo: function () {
      return this.assert.elementPresent("@whoSell")
        .setValue("@sellName", "Rocky")
        .setValue("@sellLastName", "Balboa")
        .setValue("@sellEmail", "refinance1@mailinator.com")
        .setValue("@sellPhone", "(555) 727-0000");
    },
    texSellerAddress: function () {
      return this.assert.elementPresent("@sellAddKnown")
        .click("@sellAddKnown")
        .waitFor(1000)
        .setValue("@sellStreet", "2075 DE MILO DR S.")
        .setValue("@sellZip", "77018");
    },
    sellerAddress: function () {
      return this.assert.elementPresent("@sellAddKnown")
        .click("@sellAddKnown")
        .waitFor(1000)
        .setValue("@sellStreet", "10584 SE 111th Ct")
        .setValue("@sellZip", "34472");
    },
    sellerAddressW: function () {
      return this.assert.elementPresent("@sellAddKnown")
        .click("@sellAddKnown")
        .waitFor(1000)
        .setValue("@sellStreet", "8316 E Mission Ave ")
        .setValue("@sellZip", "99212");
    },

    sellerVehicle: function () {
      return this.assert.elementPresent("@sellerVehicle")
        .click("@sellerVehicle")
        .waitFor(5000);
    },
  }],
};
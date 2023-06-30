const { testEnv, headless } = require('../config');
const { baseUrl } = require('../cypress.json').env[testEnv];
const { Builder, By, until, Capabilities } = require('selenium-webdriver');
const capabilities = Capabilities.chrome();
const chromeOptions = { args: ['--no-sandbox', '--disable-dev-shm-usage'] };
if (headless) {
  chromeOptions.args.push('--headless');
}
capabilities.set('chromeOptions', chromeOptions);
const imsCLient = require('../src/clients/ims/ims_client');
const awsCLient = require('../src/clients/aws/aws_client');
const { expect } = require('chai');
const shuffle = require('lodash/shuffle');
const driver = new Builder()
  .forBrowser('chrome')
  .withCapabilities(capabilities)
  .build();

let vinSample;

/* eslint-disable no-unused-expressions */
const checkRebate = vin => {
  describe(`${baseUrl}/inv/vin/${vin}`, () => {
    let backendData;
    before(async () => {
      const vinInventory = await imsCLient.getInventoryVinsCreditScore(vin);
      expect(vinInventory).to.be.ok;
      expect(vinInventory.operationStatus).to.eql('SUCCESS');
      backendData = vinInventory.response.inventoryDTO;
    });

    it(`checks with front end for vin ${vin}`, async () => {
      await driver.get(`${baseUrl}/inv/vin/${vin}`);

      await driver.wait(
        until.elementLocated(By.xpath(`//h4[text()='Estimated Deal Summary']`)),
      );
      const loanPermuatation = backendData.trimDTO.deal.loan.permutations;
      const isMsrp = backendData.pricingStrategy === 'MSRP';
      expect(loanPermuatation).to.be.an('array').that.is.not.empty;
      if (isMsrp) {
        await driver.findElement(
          By.xpath(`//dt[text()='Estimated Factory Cash']`),
        );
      }
      if (!isMsrp) {
        const noRebate = await driver.findElements(
          By.xpath(`//dt[text()='Estimated Factory Cash']`),
        );
        expect(noRebate).to.have.lengthOf(0);
      }
    });
  });
};

describe('starting rebate check', () => {
  before(async () => {
    const vins = await awsCLient.getRebateVehicles();
    vinSample = shuffle(vins).slice(0, 20);
    expect(vins).to.have.length.greaterThan(1);
  });

  it(`starting test against selected vins`, () => {
    vinSample.forEach(vin => checkRebate(vin));
    after(() => {
      driver.quit();
    });
  });
});

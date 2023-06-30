const { Builder, By, Capabilities } = require('selenium-webdriver');
const { expect } = require('chai');
const { VmsClient } = require('../src/clients');
const { testEnv, headless } = require('../config');
const { baseUrl } = require('../cypress.json').env[testEnv];

const capabilities = Capabilities.chrome();
const chromeOptions = { args: ['--no-sandbox', '--disable-dev-shm-usage'] };
if (headless) {
  chromeOptions.args.push('--headless');
}
capabilities.set('chromeOptions', chromeOptions);
const driver = new Builder()
  .forBrowser('chrome')
  .withCapabilities(capabilities)
  .build();
let makes;

const searchMake = async make => {
  let models;

  describe(`Checking new/${make}`, () => {
    it(`POST v1/vms/models/search using make ${make}`, async () => {
      const vehicles = [{ make: { name: make } }];
      const response = await VmsClient.modelsSearch({ vehicles });
      expect(response).to.be.ok;
      models = response.content;
      return expect(models).to.have.length.greaterThan(1);
    });

    it(`checks backend with front end for ${make}`, async () => {
      await driver.get(`${baseUrl}/new/${make}`);
      /* eslint-disable no-await-in-loop */
      // eslint-disable-next-line no-restricted-syntax
      for (const model of models) {
        const { name, startMsrp, bodyStyle } = model;
        // eslint-disable-next-line no-await-in-loop
        const msrp = Number(startMsrp).toLocaleString('en-US');
        const frontendName = await driver.findElement(
          By.xpath(
            `//h3[text()="${bodyStyle}"]/parent::*/ul/li/h4[text()="${name}"]`,
          ),
        );
        const frontendMsrp = await driver.findElement(
          By.xpath(
            `//h3[text()="${bodyStyle}"]/parent::*/ul/li/h4[text()="${name}"]/parent::*/div`,
          ),
        );
        await frontendName.getText().then(text => {
          expect(text).to.equal(name);
        });
        await frontendMsrp.getText().then(text => {
          expect(text).to.equal(`Starting at $${msrp} MSRP Details & Specs`);
        });
      }
      /* eslint-enable no-await-in-loop */
    });

    after(() => {
      if (makes.indexOf(make) === makes.length - 1) {
        driver.quit();
      }
    });
  });
};

describe('starting smoke test', () => {
  before(async () => {
    const response = await VmsClient.makesSearch();
    expect(response).to.be.ok;
    makes = response.content.map(make => make.name);
    return expect(makes).to.have.length.greaterThan(41);
  });

  it(`starting test against all avaiable makes`, () => {
    return makes.forEach(make => searchMake(make));
  });
});

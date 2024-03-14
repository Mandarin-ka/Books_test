/* eslint-disable @typescript-eslint/no-var-requires */
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const expectation = require('@wdio/globals');

describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.open();

    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await expectation.expect(SecurePage.flashAlert).toBeExisting();
    await expectation
      .expect(SecurePage.flashAlert)
      .toHaveTextContaining('You logged into a secure area!');
  });
});

import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import JavaScriptAlertsPage from '../pages/JavaScriptAlertsPage.js';
import ConfigReader from '#framework/utils/ConfigReader.js';

// To implement
When('I trigger the JS alert', async function (){
    const alertsPage = this.getPage(JavaScriptAlertsPage);
    await alertsPage.waitForPageToLoad();

    await this.browserWrapper.acceptAlert(async () => {
        await alertsPage.clickForJSAlertButton();
    });
})

Then('the alert success message is displayed', async function (){
    const testData = ConfigReader.getTestData();
    const alertsPage = this.getPage(JavaScriptAlertsPage);

    expect(await alertsPage.getResultText()).toBe(testData.alertSuccessMessage);
});

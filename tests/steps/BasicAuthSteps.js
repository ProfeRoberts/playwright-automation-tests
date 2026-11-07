import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import BasicAuth from '../pages/BasicAuth.js';
import ConfigReader from '#framework/utils/ConfigReader.js';

// To implement
Then("the authentication success message is displayed", async function (){
    const testData = ConfigReader.getTestData();

    const basicAuth = this.getPage(BasicAuth)
    // Verify that the success message is displayed
    expect(await basicAuth.getSuccessMessage()).toBe(testData.successfulBasicAuthMessage);
})

import {When, Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import SampleApp from "../pages/WalkPage.js";
import ConfigReader from '#framework/utils/ConfigReader.js';

When("I enter my username and password", async function(){
    const testData = ConfigReader.getTestData();
    const sampleApp = this.getPage(SampleApp);
    await sampleApp.waitForPageToLoad();
    const sampleOpen = await sampleApp.isPageOpened();
    expect(sampleOpen).toBe(true);
    await sampleApp.typeCredentials(testData.username);
})

When("I click the login button", async function(){
    const sampleApp = this.getPage(SampleApp);
    await sampleApp.clickLogin();
})

When("the welcome message and my name is displayed", async function(){
    const testData = ConfigReader.getTestData();
    const sampleApp = this.getPage(SampleApp);
    const status = await sampleApp.getStatus();
    expect(status).toBe(`Welcome, ${testData.username}!`);
})

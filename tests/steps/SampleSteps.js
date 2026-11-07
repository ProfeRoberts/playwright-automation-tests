import { When, Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import SampleApp from "../pages/Sample.js";
import ConfigReader from "#framework/utils/ConfigReader.js";
import * as allure from "allure-js-commons";

When("I enter my credentials", async function(){
    await allure.description("The user name is Luis");
    const testData = ConfigReader.getTestData();
    const sampleApp = this.getPage(SampleApp);
    await sampleApp.waitForPageToLoad();
    expect(await sampleApp.isPageOpened()).toBe(true);
    await sampleApp.enterCredentials(testData.username, testData.password);
})

When('I click Log in', async function(){
    const sampleApp = this.getPage(SampleApp);
    await sampleApp.clickLogIn();
})

Then('the welcome message and my user is displayed', async function(){
    const testData = ConfigReader.getTestData();
    const sampleApp = this.getPage(SampleApp);
    expect(await sampleApp.checkStatus()).toBe(`Welcome, ${testData.username}!`);
})

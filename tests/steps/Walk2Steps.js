import {When, Given, Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import MainPage2 from "../pages/WalkPage2.js";

Given('the ui test page is open', async function () {
    const mainPage = this.getPage(MainPage2);
    await mainPage.waitForPageToLoad();
    expect(await mainPage.isPageOpened()).toBe(true);
})

When('I go to the {string} page', async function (linkName) {
    const mainPage = this.getPage(MainPage2);
    await mainPage.clickNavigationLink(linkName);
})

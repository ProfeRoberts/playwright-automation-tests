import { When, Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import UItestPage from "../pages/UItestPage.js";

Given("the page is open", async function(){
    const uitestPage = this.getPage(UItestPage);
    await uitestPage.waitForPageToLoad();
    expect(await uitestPage.isPageOpened()).toBe(true);
})

When('I open the {string} page', async function(text){
    const uitestPage = this.getPage(UItestPage);
    await uitestPage.clickNavigationLink(text);
})

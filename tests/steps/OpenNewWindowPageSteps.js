import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import OpenNewWindowPage from '../pages/MultipleWindowsPages/OpenNewWindowPage.js';

// To implement
Then("I open a new window", async function (){
    const openNewWindowPage = this.getPage(OpenNewWindowPage);

    const newWindow = await this.browserWrapper.openLinkInNewTab(() => openNewWindowPage.clickNewTabLink());


})

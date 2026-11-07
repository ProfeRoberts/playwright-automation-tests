import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import NewWindowPage from '../pages/MultipleWindowsPages/NewWindowPage.js';

// To implement
Then("the text new window is displayed", async function (){
    const newWindowPage = this.getPage(NewWindowPage);

    expect(await newWindowPage.getNewWindowLabelText()).toBe("New Window");
})

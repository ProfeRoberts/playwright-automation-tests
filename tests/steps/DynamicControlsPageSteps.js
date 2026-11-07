import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import DynamicControlsPage from '../pages/DynamicControlsPage.js';

// To implement
When("I enable the text input", async function (){
    const dynamicControlsPage = this.getPage(DynamicControlsPage);
    await dynamicControlsPage.clickEnableButton();
    expect(await dynamicControlsPage.isInputFieldEnabled()).toBe(true);

})

Then("I can enter text", async function (){
    const dynamicControlsPage = this.getPage(DynamicControlsPage);
    await dynamicControlsPage.inputTextIntoInputField("Amy");
    expect(await dynamicControlsPage.getValueFromInputField()).toBe("Amy");
})

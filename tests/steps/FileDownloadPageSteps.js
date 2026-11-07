import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import FileDownloadPage from '../pages/FileDownloadPage.js';
import ConfigReader from '#framework/utils/ConfigReader.js';
import FileUtils from '#framework/utils/FileUtils.js';

// To implement

Then("I download an available file", async function (){
    const fileDownloadPage = this.getPage(FileDownloadPage);
    const testData = ConfigReader.getTestData();

    expect(await fileDownloadPage.isFileLabelDisplayed(testData.downloadFileName)).toBe(true);
    const filePath = await this.browserWrapper.downloadAndSave(
        () => fileDownloadPage.clickDownloadFile(testData.downloadFileName), // Pass the page object action as a callback
        testData.downloadFileName                         // Desired filename
    );
    expect(await FileUtils.isFileExists(filePath)).toBe(true);
})

import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import FileUploaderPage from '../pages/FileUploaderPages/FileUploaderPage.js';
import UploadedFilesPage from '../pages/FileUploaderPages/UploadedFilesPage.js';
import ConfigReader from '#framework/utils/ConfigReader.js';

// To implement
Then("I upload a file", async function (){
    const fileUploaderPage = this.getPage(FileUploaderPage);
    const testData = ConfigReader.getTestData();

    await fileUploaderPage.uploadFile(testData.fileForUpload);
})

Then("the file name is displayed", async function (){
    const uploadedFilesPage = this.getPage(UploadedFilesPage);

    expect(await uploadedFilesPage.getUploadedFileName()).toBe("test.txt");
})

Feature: File Upload
    As a user, I want to upload a file

    @upload

    Scenario: Upload a File
    Given the main page is open
    When I navigate to the "File Upload" page
    Then I upload a file
    And the file name is displayed

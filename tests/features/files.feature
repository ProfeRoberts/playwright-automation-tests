Feature: File download
    As a user, I want to download a file

    @download

    Scenario: Download a File
    Given the main page is open
    When I navigate to the "File Download" page
    Then I download an available file

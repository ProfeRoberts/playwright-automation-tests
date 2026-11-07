Feature: Sample App

    @sample

    Scenario: The user log in with valid credentials
    Given the page is open
    When I open the "Sample App" page
    And I enter my credentials
    And I click Log in
    Then the welcome message and my user is displayed

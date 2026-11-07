Feature: Log in
    As a User I want to authenticate my account using my username and password
    @login

    Scenario: Standard log in
    Given the ui test page is open
    When I go to the "Sample App" page
    And I enter my username and password
    And I click the login button
    Then the welcome message and my name is displayed

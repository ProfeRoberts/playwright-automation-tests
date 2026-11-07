Feature: Basic Authentication
    As a user, I want to Autheticate

    @auth

    Scenario: Authenticate
    Given the main page is open
    When I navigate to the "Basic Auth" page
    Then the authentication success message is displayed

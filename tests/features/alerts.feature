Feature: JavaScript Alerts
    As a user, I want to handle Javascript Alerts

    @alerts

    Scenario: Accept a Javascript alert
    Given the main page is open
    When I navigate to the "JavaScript Alerts" page
    And I trigger the JS alert
    Then the alert success message is displayed

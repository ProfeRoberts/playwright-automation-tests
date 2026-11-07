Feature: Dynamic Controls

    @element

    Scenario: Change the state of an element
    Given the main page is open
    When I navigate to the "Dynamic Controls" page
    And I enable the text input
    Then I can enter text

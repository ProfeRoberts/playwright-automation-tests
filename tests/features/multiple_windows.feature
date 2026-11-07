Feature: Multiple Windows Interaction

  @newwindow

  Scenario: Open and interact with new windows
    Given the main page is open
    When I navigate to the "Multiple Windows" page
    Then I open a new window
    And the text new window is displayed

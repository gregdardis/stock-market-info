Feature: Search for a stock
  As a stock-market-search user
  In order to be informed about a company's stock and financial situation
  I want to search for the company's stock and see associated financial data

  Scenario: Search for an invalid stock
    Given I am on the homepage
    And my cursor is in the searchbar
    When I type text that is an invalid stock symbol
    And I click the search icon
    Then I should see an error message that the stock was not found

  # TODO: add scenario for valid stock search

  # TODO: add scenario for search with ENTER

  Scenario: Clear Search input text with Escape key
    Given I am on the homepage
    And focus is on the searchbar
    When I press Escape
    Then the searchbar should be cleared of all text
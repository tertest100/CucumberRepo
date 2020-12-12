Feature: Search Functionality in Amazon website

  Background: 
    Given User should open Chrome browser

  Scenario Outline: Provide the search function to the user to have quick access to the required product
    Given The user is already on the Amazon Home Page
    When user Click on search bar and type "<ProductName>"
    Then user should be shown all the availble "<ProductName>" in the inventory
    But User should not see the "<ExcludedProduct>"

    Examples: 
      | ProductName | ExcludedProduct |
      | Laptop      | Dell            |
      | Mobile      | Samsung         |

Feature: Search functionality

  As a user I want to search car with model

  @Smoke @Sanity @Regression
  Scenario Outline: User should search the buy car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click Search Cars
    Then I navigate to new and used car search page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results

    Examples:
      | make        | model     | location          | price   |
      | BMW         | 3 Series  | NSW - All         | $50,000  |
      | Nissan      | Skyline   | NSW - Sydney      | $45,000  |
      | Peugeot     | RCZ       | NSW - New England | $50,000  |
      | Toyota      | Prius     | QLD - All         | $40,000  |
      | Tesla       | Model S   | VIC - All         | $90,000  |
      | Rolls-Royce | Any Model | QLD - All         | $150,000 |

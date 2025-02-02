@cart @regression
Feature: As a user I should be able to place order using Card Functionality

    Scenario: Test user can see place order popup and closes it
        Given I navigate to the User account
        When user clicks on Cart link
        Then user clicks on Place Order button
        And user closes Place Order popup

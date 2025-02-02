@login @smoke @regression
Feature: As a user I should be able to logout and close the login 

    Background: Test Login functionality
        Given I navigate to the User account
        When user signout

    Scenario: Test user can logout successfully
        Then user should be on the Home page
    
    Scenario: Test User can close login popup
        When user clicks on Login link
        Then user should see the login popup
        And user closes login popup

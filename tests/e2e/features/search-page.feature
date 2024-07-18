@e2e
Feature: Search page
    As a user
    I want to test the search functionality

    Background: Open the search page
        Given I open the search page on the browser

    Scenario: The search page is opened
        And The search page should be opened on the browser

    Scenario: Apply filter and verify results
        When I apply the filter "Computer Vision Hazard Detection" on the solution type category
        Then I should see "2" result(s)
        When I click the "RESET ALL" button
        Then I should see "10" result(s)

    Scenario: Validate search field input
        When I enter "Genda$" into the search field
        Then I should see the message "The search only allow A-Z a-z À-ÿ 0-9 and the special characters:-_'. Please enter a valid value on the search."
        When I clear the search field
        Then I should see "10" result(s)
        When I enter "Genda" into the search field
        And I click the "Search" button
        Then I should see "1" result(s)
        When I click on the link with text "READ MORE"
        When I expect to go to product page
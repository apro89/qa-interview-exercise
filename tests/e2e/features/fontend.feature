@e2e
Feature: Partners E2E test
    As a user
    I want to test
    the partners funcionality

    Background: Open the application
        Given I open the web application on the browser

    @openApplication
    Scenario: Test AXA web application is open
        When The web application should be opened on the browser
        And I click the "ACCEPT ALL COOKIES" button
        Then I expect not to see "COOKIES POLICY"

    @testNavigation
    Scenario: The navigation works correctly
        When The web application should be opened on the browser
        And I click the "SERVICES" button
        Then The submenu is opened
        When I click on the link with text "Meet our Preferred Partners"

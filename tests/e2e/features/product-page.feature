@e2e
Feature: Product page
    As a user
    I want to test the product page functionality

    Background: Open the product page
        Given I open the product page on the browser

    Scenario: The product page is opened
        And The product page should be opened on the browser

    Scenario: Submit empty form and check error messages
        And I submit the form
        Then I should see error messages for all required fields

    Scenario: Check invalid email format
        When I enter to the input with label "Email*" the message "invalid-email"
        And I submit the form
        Then I should see the message "The email format should be user-name@domain.com. Please enter a valid email"

    Scenario: Check invalid characters in name field
        When I enter to the input with label "Name*" the message "!@#$%"
        And I submit the form
        Then I should see the message "The name only allow A-Z a-z À-ÿ 0-9 and the special characters:-_'. Please enter a valid name."

    Scenario: Check invalid characters in message field
        When I enter to the input with label "Message*" the message "!@#$%"
        And I submit the form
        Then I should see the message "The message only allow A-Z a-z À-ÿ 0-9 and the special characters:-_'. Please enter a valid message."

    Scenario: Fill in the form but do not submit
        When I enter to the input with label "Name*" the message "John Doe"
        And I enter to the input with label "Email*" the message "john.doe@example.com"
        And I use the select with label "Country*" and select option "United States"
        And I enter to the input with label "Message*" the message "This is a test message."
        Then The input with label "Name*" contains the text "John Doe"
        And The input with label "Email*" contains the text "john.doe@example.com"
        And The input with label "Message*" contains the text "This is a test message."
        And The select with label "Country*" should have the option "US" selected

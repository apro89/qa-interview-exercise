@api
Feature: Retrieve and validate user profile information

    Scenario: Get profile information correctly
        Given Login as a user with email "bob@gmail.com" and password "bob2023"
        When The user executes an authenticated GET to the "get-user-profile" endpoint
        Then The response status code is "200" successful
        And The response contains the correct email "bob@gmail.com" and name "bob user"

    Scenario: Get profile information with invalid token
        Given The user has an invalid token
        When The user executes an authenticated GET to the "get-user-profile" endpoint
        Then The response status code is "401" successful
        And The response message is "Access token is not valid or has expired, you will need to login"

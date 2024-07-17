@api
Feature: Create new user

    Scenario: New user is created successfully
        Given The user executes a POST to create a unique user with name "bob user", password "bob2023"
        Then The response status code is "201" successful
        And The response message is "User account created successfully"

    Scenario: An account already exists with the same email address
        Given The user executes a POST to create a user with name "bob user", email "bob3@gmail.com", password "bob2023"
        Then The response status code is "409" successful
        And The response message is "An account already exists with the same email address"
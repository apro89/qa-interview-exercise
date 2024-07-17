@api
Feature: Login with as existing user

    Scenario: Login with an existing user is done successfully
        Given Login as a user with email "<Email>" and password "<Password>"
        Then The response status code is "200" successful
        And The response message is "Login successful"
        Examples:
            | Email          | Password |
            | bob@gmail.com  | bob2023  |
            | bob2@gmail.com | bob2023  |
            | bob2@gmail.com | bob2023  |


    Scenario: Login with valid credentials as a user that doesn't exit
        Given Login as a user with email "<Email>" and password "<Password>"
        Then The response status code is "401" successful
        And The response message is "Incorrect email address or password"
        Examples:
            | Email               | Password |
            | 12bob@gmail.com     | 123456   |
            | 12bobwwer@gmail.com | 123456   |
            | 2342345@gmail.com   | 123456   |

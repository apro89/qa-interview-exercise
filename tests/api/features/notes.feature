@api
Feature: Notes

    Background: Login as valid user
        Given Login as a user with email "bob@gmail.com" and password "bob2023"

    Scenario: Create a new note and validate
        When The user creates a new note with title "first note", description "first note description", and category "Home"
        Then The response status code is "200" successful
        And The response message is "Note successfully created"
        And The response contains the note with title "first note", description "first note description", and category "Home"

    Scenario: Retrieve all notes and validate the first note by ID
        When The user executes an authenticated GET to the "get-all-notes" endpoint
        And The user retrieves the first note by ID
        Then The response status code is "200" successful
        And The response message is "Note successfully retrieved"
        And The response contains the note with correct ID

    Scenario: Update an existing note and validate
        When The user executes an authenticated GET to the "get-all-notes" endpoint
        And The user retrieves the first note by ID
        And The user updates the first note with title "Updated title", description "Updated description", and category "Work"
        Then The response status code is "200" successful
        And The response message is "Note successfully Updated"
        And The response contains the note with title "Updated title", description "Updated description", and category "Work"
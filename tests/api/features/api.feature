@api
Feature: E2E test manage notes


    @testExample2
    Scenario: Check health API notice service
        Given The user execute a GET to the "health-check" endpoint
        Then The response status code is "200" successful
        And The response message is "Notes API is Running"
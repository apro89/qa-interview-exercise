# qa-interview-exercise

## Task 1: Functional E2E Automation on AXA Website 
Create automated test scripts to verify the user journey and functionality of key elements on the AXA website using Cucumber, Playwright and TypeScript using Chrome browser. 

AXA Website URL
```console
https://smartservices.axaxl.com/
```
### Requirements: 

* The AXA website should provide a seamless user experience for navigating through different sections and accessing key information. 

* Users should be able to find and interact with various elements such as navigation menus, search functionality, and contact forms. 

* Key pages such as the homepage, product pages, and contact pages should be accessible and functional. 

### Test Steps: 

1. Navigate to the AXA website homepage
2. Accept the cookies
3. Click on the Services navigation menu
4. Click on Meet our Preferred Partners
5. Apply the filter Computer Vision Hazard Detection on the solution type category
6. Check that 2 result are displayed
7. Click on "Reset All” to reset the filters
8. Enter on the search field “Genda$”
9. Check the message “The search only allow A-Z a-z À-ÿ 0-9 and the special characters:-_'. Please enter a valid value on the search.” is displayed
10. Clear the search field
11. Enter on the search field “Genda”
12. Click on the search button
13. Click on “Read more” link of the “Genda” partner
14. Check the form fields error validations:
  *  Submit an empty form and check all fields have an error message
  *  Check message when the email has an incorrect format
  *  Check invalid characters message on name and message fields (!”·$%&)  
15. Fill in the form but do not submit it. 
      
### Additional Challenges: 

* Implement cross-browser testing to ensure compatibility with different web browsers (Firefox, Chrome, Safari). 

* Validate the responsiveness of the website across various device resolutions, such as desktop, tablet, and mobile.

### Assessment Criteria: 

* Effective creation of automated test scripts to navigate and interact with the AXA website.  

* Utilization of Cucumber, TypeScript and Playwright to handle interactions and validations across different pages and elements. 

* Documentation of test cases and results, including any potential issues encountered during the test. 

* Pushing the automation code to a GitHub repository. 

* Creation of a comprehensive README file explaining the test scenarios, how to execute the test, including the libraries and dependencies used.

## Task 2: Functional API Testing on Manage Notes API  
Create automated test scripts to verify the Manage Notes API is working correctly using Cucumber, Playwright and TypeScript. 

API documentation URL
```console
 https://practice.expandtesting.com/notes/api/api-docs/#/ 
```

### Requirements: 
* The API should return a success response code (e.g., HTTP 200) upon receiving a valid request.
  
* The data format of the response should be consistent and follow the API documentation.
  
* The API should handle invalid input gracefully and return appropriate error codes and messages.
  
### Test Steps: 

1. Create new user account 

2. Login as an existing user 

3. Get profile information correctly and validate: 

  * Check the response code to ensure it is a successful response (e.g., HTTP 200). 

  * Validate the response contain the correct email and name. 

4. Try Get profile information with invalid token and validate: 

  * Check the response code (e.g., HTTP 401). 

  * Validate the response contains an error message: Access token is not valid or has expired, you will need to login 

5. Create a new note and validate: 

  * Check the response code to ensure it is a successful response (e.g., HTTP 200). 

  * Validate the response contain message: Note successfully created 

  * Validate the response contain the correct title description and category 

6. Update an existing note and validate 

  * Check the response code to ensure it is a successful response (e.g., HTTP 200). 

  * Validate the response contain message: Note successfully Updated 

  * Validate the response contain the correct title description and category 

7. Get the note by id and validate  

  * Check the response code to ensure it is a successful response (e.g., HTTP 200). 

  * Validate the response contain message: Note successfully Updated 

  * Validate the response contain the correct id
    
### Assessment Criteria: 

*  Effective creation of automated test scripts to interact with the API.  

*  Utilization of Cucumber, TypeScript, and Playwright to handle interactions and validations on the API  

*  Documentation of test cases and results, including any potential issues encountered during the test. 

*  Pushing the automation code to a GitHub repository. 

*  Creation of a comprehensive README file explaining the test scenarios, how to execute the test, including the libraries and dependencies used. 

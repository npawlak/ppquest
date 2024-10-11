
# Basic Test Info

The tests below present an example of a single test scenario containing 5 test cases. The scenario has also been prepared as automated tests. The following tests were written with the assumption of simplicity, minimal maintenance, and basic checks. At the end of this document, there are recommendations on how the automated tests could be enhanced.

# Test Scenario

Test Scenario: Verification of Basic Functionalities  
The scenario consists of 5 test cases.

1.  **Required Fields Check**
    
    **Goal:** Ensure that all required fields are properly marked and validated.
    
    **Steps:**
    -   Open the form page.
    -   Leave all required fields empty.
    -   Attempt to submit the form.
    -   Check if error messages are displayed for each required field.
      
2.  **Correct Form Submission**
    
    **Goal:** Ensure that the form is successfully submitted with valid data.
    
    **Steps:**
    
    -   Open the form page.
    -   Fill in the form with valid data.
    -   Click the "Register" button.
    -   Verify that the user is redirected to a confirmation page or that a success message is displayed.
  
3.  **Password Requirements Check**
    
    **Goal:** Ensure that the password meets the specified requirements.
    
    **Steps:**
    
    -   Open the form page.
    -   Enter a password that does not meet the requirements (e.g., too short).
    -   Check if an error message is displayed.
    -   Enter a password that meets the requirements (e.g., at least 8 characters, a capital letter, a digit).
  
4.  **Date of Birth Validation**
    
    **Goal:** Verify that the user cannot select a date of birth in the future.
    
    **Steps:**
    
    -   Open the form page.
    -   Try to select a birth date in the future (e.g., two days ahead).
    -   Verify that the form blocks the selection and displays the appropriate error message.
  
5.  **Email Address Validation**
    
    **Goal:** Ensure that the email address is properly validated.
    
    **Steps:**
    
    -   Open the form page.
    -   Enter an invalid email address (e.g., without the "@" symbol or with an incorrect domain).
    -   Check if an error message is displayed.
    -   Enter a valid email address and ensure that the form accepts it without errors.
  
# Potencial ways of improvments

These basic automated tests can be further developed or made more advanced, depending on project requirements, budget, and the team's skills. Additionally, the existing tests can be easily extended by extracting certain data into variables and creating reusable functions. This would improve the overall maintainability and flexibility of the test suite.

Moreover, the tests have been written as 5 separate test cases instead of one long test. This approach follows best practices, as it ensures better readability, maintainability, and makes it easier to identify specific issues.

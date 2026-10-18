Feature: Demo

    Scenario:  Login with Valid Credential
        Given login into OrangeHM
        When fill the valid username "Admin"
        And fill the valid password "admin123"
        When the user clicks on the login button
        Then the user is logged into OrangeHM with valid session

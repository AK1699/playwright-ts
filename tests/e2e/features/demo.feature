Feature: Demo

    # Scenario:  Login with Valid Credential
    #     Given login into OrangeHM
    #     Then fill the valid username "Admin"
    #     And fill the valid password "admin123"
    #     When the user clicks on the login button
    #     Then the user is logged into OrangeHM with valid session


    Scenario Outline:  Login with valid "<username>" & "<password>"
        Given login into saucedemo
        Then fill the valid username "<username>"
        And fill the valid password "<password>"
        When the user clicks on the login button
        Then the user is logged into saucedemo with valid session

        Examples:
            | username      | password     |
            | standard_user | secret_sauce |
            | problem_user  | secret_sauce |
            | error_user    | secret_sauce |
            | visual_user   | secret_sauce |

    Scenario Outline:  Login with In-valid "<username>" & "<password>"
        Given login into saucedemo
        Then fill the in-valid username "<username>"
        And fill the in-valid password "<password>"
        When the user clicks on the login button
        Then the system should throw the error message as "Username and password do not match any user in this service"
        
        Examples:
            | username        | password     |
            | locked_out_user | secret_sauce |
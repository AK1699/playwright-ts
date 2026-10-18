# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/e2e/features/demo.feature.spec.js >> Demo >> Login with Valid Credential
- Location: .features-gen/tests/e2e/features/demo.feature.spec.js:6:7

# Error details

```
Error: locator.click: SyntaxError: Failed to execute 'querySelectorAll' on 'Document': '["type=submit"]' is not a valid selector.
    at query (<anonymous>:5817:41)
    at <anonymous>:5827:7
    at SelectorEvaluatorImpl._cached (<anonymous>:5604:20)
    at SelectorEvaluatorImpl._queryCSS (<anonymous>:5814:17)
    at SelectorEvaluatorImpl._querySimple (<anonymous>:5694:19)
    at <anonymous>:5642:29
    at SelectorEvaluatorImpl._cached (<anonymous>:5604:20)
    at SelectorEvaluatorImpl.query (<anonymous>:5635:19)
    at Object.query (<anonymous>:5849:44)
    at <anonymous>:5807:21
Call log:
  - waiting for locator('["type=submit"]')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - generic [ref=e7]:
      - img "company-branding"
    - generic [ref=e8]:
      - heading "Login" [level=5] [ref=e9]
      - generic [ref=e10]:
        - generic [ref=e12]:
          - paragraph [ref=e13]: "Username : Admin"
          - paragraph [ref=e14]: "Password : admin123"
        - generic [ref=e15]:
          - generic [ref=e17]:
            - generic [ref=e18]:
              - generic [ref=e19]: 
              - generic [ref=e20]: Username
            - textbox "Username" [ref=e22]: Admin
          - generic [ref=e24]:
            - generic [ref=e25]:
              - generic [ref=e26]: 
              - generic [ref=e27]: Password
            - textbox "Password" [active] [ref=e29]: admin123
          - button "Login" [ref=e31] [cursor=pointer]
          - paragraph [ref=e33] [cursor=pointer]: Forgot your password?
      - generic [ref=e34]:
        - generic [ref=e35]:
          - link [ref=e36] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e39] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e42] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e45] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e48]:
          - paragraph [ref=e49]: OrangeHRM OS 5.9
          - paragraph [ref=e50]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e51] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - generic [ref=e52]:
    - img "orangehrm-logo"
```
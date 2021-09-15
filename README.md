# README

## Setup

Make sure 'NodeJS' and 'npm' are installed.  
To install project dependencies execute:  
`npm install`

## Test Execution

To run test execute:  
`npm test`

## QA comments

**Why I haven't used Page Object Pattern?**  
Please
read: ['Stop using Page Objects and Start using App Actions' by Gleb Bahmutov](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)  
In my view for such case using custom Cypress commands and functions defined in `utils` folder should be enough to keep
code maintainable and reusable.

**Selectors**  
Unfortunately I didn't have access to app code, hence I wasn't able to add custom attributes for HTML elements (as it is
advised [here](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements) )

**Tests structure**  
I've divided test scenarios by feature under test to get better readability.

## Bugs

[Bugs list on Google Docs](https://docs.google.com/document/d/1qw_dz48XVq6KSd8eV-ntTtQp9ffEvq2v2A6oh7EuY70/edit?usp=sharing)

## Questions

[Questions on Google Docs](https://docs.google.com/document/d/1-GSSW0shihH6AHQFg63RWiHjq1WkUchiv9FPKNcQJ_w/edit?usp=sharing)
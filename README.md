This project consists of examples for both:
- UI
- API

# Prerequisites:
- node.js
- npm
- Visual Studio Code Edition (VS Code)

# Steps:
- Clone the repo 
- Open the project in VSCode and in the terminal run the command `npm install` to install all the dependencies

## How to run UI/API tests:
- Tests can be run either locally or based on the tags
- In `pacakge.json` added the scripts as mentioned below:

    ### To run tests locally in Cypress Runner
    `npm run cy:open`

    ### To run tests based on feature
    `npm run cy:run:feature` => As an example added '@login' so it would run only the tests tagged with `@login` and skips the remaining tests. 

    ### To run only regression tests
    `npm run cy:run:regression`

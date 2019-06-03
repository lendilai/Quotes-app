# Quotes-App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Description
This is an app that allows the user to view various quotes and also add his/her own quotes. The app also gives the user the ability to upvote a quote or downvote it and delete a quote on their side of the server. The details of each quote are the Author's name, the quote itself, and the day it was quoted.

## Setup Instructions
#### Step 1 - Download zip
Download the zip folder or clone the repo.

#### Step 2 - Download the dependencies
To do this run the following:
`$ npm install -g @angular/cli`

#### Step 3 - Running the app
First run:
`$ ng serve`
Then navigate to `http://localhost:4200/` on your browser.

#### Live link
If you don't want to run the app from your local browser you can acces it through the live link:

## Working mechanism
- Go to the 'quotes' page.
- Enter **all** the required details and click on the add      button.
- Your quote is displayed and you can view the quote by clicking the 'show' button.
- You can upvote or downvote a quote by clicking the respective buttons.
- Finally, you can delete a quote from your side of the server.

## Behaviour Driven Development(BDD)
| Behaviour | Input example    | Output example |
| :------------- | :------------- | :------------- |
| Adding a quote | Fill in fields and click add button  | The quote is appended to the list of quotes |
| Show quote's details | Click 'show' button | The details of the quote appear |
| Upvote/ downvote a quote | Click upvote button/icon | The number of votes increases by one |
| Delete a quote | Click delete button | The specific quote gets deleted |

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## LICENSE
The application is under an [MIT License]("")

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

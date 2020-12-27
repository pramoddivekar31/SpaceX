# SpaceX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Heroku Development

Navigate to [spacex.com](https://publicis-sapient-space-x.herokuapp.com/) to check deployed version.

## Github Pages Deployment (README.md)

Navigate to [Project Details](https://pramoddivekar31.github.io/SpaceX/) to check project details and setup instructions.

## Stack Details And Approach

Stack - `Angular: 11.0.5, Node: 15.4.0, Typescript: 4.0.5, Rxjs: 6.5.5`

Approach - 
  1. Created two dumb component and used App component as smart componet. Dumb components are used just to render the view and are reusable.
  2. Created a service to share data between components and placed inside shared folder.
  3. API response taken as Observable stream and modilfied as required in service itself with the help of RXJS operators.
  4. Media queries are used to make page responsive for mobile, tablet, desktop.
  5. Routing Module is not used as there was no requirement to navigate from one page to another page.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# User management http

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.
Tutorial Sample for User Management Application with Angular 4 Frontend backed by ExpressJS and NodeJS on Server side (node-rest project) with MongoDB as database

## Setup Development Environment after cloning Git repository

1. git clone ....
2. On the cloned directory on your local system :: ng serve --open
3. This will load browser with url localhost:4200/users

## Development server

1. Start MongoDB Server (Not necessary if your node trigger MongoDB) :: mongod on any DOS prompt
2. Start Node on Server :: On the 'node-rest' directory, nodemon server.js
3. Start Angular :: On the 'user-management' directory, 
Run `ng serve --open` for a dev server. 
4. Test on chrome browser :: enable CORS if you run server and client on same server :: Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
5. Test REST API before calling Node application from Angular :: Add Postman extension to your Chrome browser and enter GET :: localhost:3000/api/users. More details are available on node-rest repository in this GitHub

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Existing project into GitHub repository
https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# AngularFrontendApp

This project retrieves a date , time , and timezone from a downstream service.

- time and timezone coming from the downstream service will be converted to local 'Asia/Manila' region by calling an api hosted on `api.timezonedb.com`which will then be displayed.

**Rooms for improvement regarding the requirement / instruction of this assignment.**

- convertion of the time should be orchestrated by the backend service / downstream service. This potentially can improve security especially CORS issue and avoid executing of potentially executing scripts from frontend.

NOTE: This solution involves alllowing cross origin from the backend. Typical for testing. Not a good pattern to be used in acceptance and production.

**Before accessing the site hosted on heroku** [https://angular-serverdetails.herokuapp.com/serverdetails](https://) . **This should be executed belowin chrome this should be executed beforehand** . This will resolved issue regarding the access / execution of a script which involves loading / retrieving of a resource coming from a different source /  domain.

1. Click on the 'i' info icon on the left side of address bar.
2. Click `Site Settings`
3. Scroll down to `Insecure content`
4. Change it from `Blocked (Default)` to `Allow`
5. Reload the page and try your action again.


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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<b>AngularJS to Angular Migration using phone-cat project</b>

This is a 3-stepped process of migrating an AngularJS app completely to Angular. The steps are as follows:
1. Clone Angular phone-cat
2. Hybrid application using ngUpgrade
3. Complete removal of AngularJS

The instructions and steps followed over here are from the offocial Angular upgrade guide: https://angular.io/guide/upgrade

<b>Installing Dependencies</b>

The application relies upon various JS libraries, such as AngularJS/Angular/Jquery etc. You can install these by running:

`npm install`

<b>Compilation</b>

The application is a hybrid of Angular and AngularJs and relies on typescript. For typescript compilation run:

`npm run tsc`

<b>Execution</b>

This application relies on http-server. You can run it using:

`npm start`

Navigate your browser to http://localhost:8000/ to see the application running.

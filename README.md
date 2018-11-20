# Selenium Timing Tester

Timing automated UI events against a test CRM, and uploading the results to a Mongo database.

## Requirements

This demo requires Node.js. 

### Instructions

1. Run `npm install` to install the application dependencies.

2. When that is complete, run `npm run-script start`. This will run webpack to bundle the Javascript files, and will subsequently use nodemon to start the server. The server by default runs at `http://localhost:4444`(this can be altered in `config/port.js`).

3. Run `npm run-script test` to start the Selenium logging script. This source code for this script can be found in the selenium folder in the root directory of the application.

### Mongo Database URI

The database used by the application can be configured in the `config/keys.js` file. A default mlab database URI is provided for testing purposes, but this can be changed to point to any Mongo database.

# apiautomator

Light Node Application for API Automation Testing

## Folder Structure of apiautomator framework

 -> Folder
 -- File

```terminal

->  reports
    ->  html
        -- smokeTestReport.html
        -- regressionTestReport.html
    ->  json
    ->  handlebars
->  resources
    ->  jsonSchema
        -- samplejsonschema.json
    ->  xmlSchema
        -- samplexmlschema.xml
->  test
    ->  regression
    ->  smoke
--  app.js
--  package.json
--  package-lock.json
--  README.md
--  LICENSE
--  .gitignore
--  .npmignore
```

## Node Install

```terminal
$ npm install
```

## Run the test script in the package.json
```terminal
$ npm run test
```


## Run the smoke script in the package.json
```terminal
$ npm run smoke
```


## Run the regression script in the package.json
```terminal
$ npm run regression
```



## To Do

### Schema Assertions

JSON Schema
https://www.npmjs.com/package/chai-ajv-json-schema
XML Schema
https://www.npmjs.com/package/xsd-schema-validator

### SOAP Requests

https://github.com/circa10a/easy-soap-request/blob/master/test/retrieveLngLattest.js

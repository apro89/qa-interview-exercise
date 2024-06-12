# qa-interview-exercise

## Required Setup:
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) should be installed
* [Node](https://nodejs.org/en/download/package-manager) should be installed
* [Visual Studio](https://code.visualstudio.com/) IDE should be installed

##  Stack & Libraries
* [Playwright](https://playwright.dev/docs/intro)
* [Cucumber](https://cucumber.io/docs/installation/javascript/)
* [Cucumber.js Pretty Formatter](https://www.npmjs.com/package/@cucumber/pretty-formatter?activeTab=readme)
* [TypeScript](https://www.typescriptlang.org/download/)
* [eslint](https://eslint.org/)
* [Winston](https://github.com/winstonjs/winston)

###  IDE Extensions
* Playwright
* Cucumber

## Contributing

First of all, you need clone the repository

### Installing dependencies
Open the project on the Visua Studio Code  and go to terminal, from the root of the project execute the next command to install the dependecies:

API documentation URL
```console
npm install
```
### Running fontend tests
By default the url configured is [AXA page](https://smartservices.axaxl.com/), if you want change the URL you need:

From the root of the project
```console
export BASEURL='environmetURL'
```
By default the test are launched in heandless mode true , if you want change this you need:

From the root of the project
```console
export HEADLESS=false
```
By default the playwright traces and har are disable, if you want change this you need:

From the root of the project
```console
export TRACE='true'
export HAR='true'
```
Once you configure all the correct execution parameters you can execute the test with the next command:

From the root of the project
```console
npm run testE2E
```
### Running api tests
By default the url configured is [Notes API](https://practice.expandtesting.com/notes/api), if you want change the URL you need:

From the root of the project
```console
export BASE_URL_API ='environmetURL'
```
By default the playwright traces and har are disable, if you want change this you need:

From the root of the project
```console
export TRACE='true'
export HAR='true'
```
Once you configure all the correct execution parameters you can execute the test with the next command:

From the root of the project
```console
npm run testAPI
```
### Test reports
After the execution of the test the  `cucumber_report.json` resports are generated on the `reports` folder, in order obtain the html report  on the same folder you should execute the next command:
```console
npm run report
```

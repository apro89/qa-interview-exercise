import { Given, Then, setDefaultTimeout} from "@cucumber/cucumber"
import HomePage from "../pages/home-page";
import { fixture } from "../utils/logger/fixture";

let homePage: HomePage;
const URL: string = process.env.BASEURL ?? 'https://smartservices.axaxl.com/';
setDefaultTimeout(60 * 20000);

Given('I open the web application on the browser', async function () {
    homePage = new HomePage(this.page); 
    await homePage.goto(URL);
    fixture.logger.info(`I open the web application on the browser`);
});

Then('The web application should be opened on the browser', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
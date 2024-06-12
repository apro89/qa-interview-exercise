import { Given, Then, setDefaultTimeout} from "@cucumber/cucumber"
import HomePage from "../pages/home-page";
import { fixture } from "../../utils/fixture";

let homePage: HomePage;
const URL: string = process.env.BASEURL ?? 'https://smartservices.axaxl.com/';
setDefaultTimeout(60 * 20000);


Given('I open the web application on the browser', async function () {
    homePage = new HomePage(fixture.page); 
    await homePage.goto(URL);
    fixture.logger.info(`I open the web application on the browser`);
});

Then('The web application should be opened on the browser', async function () {
    homePage.assertHomePageIsOpened(URL);
  });
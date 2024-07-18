import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import HomePage from "../pages/home-page";
import { fixture } from "../../utils/fixture";
import { PAGE_URL } from "../util/page-url";
import { expect } from "playwright/test";

let homePage: HomePage;
setDefaultTimeout(60 * 20000);

Given("I open the web application on the browser", async function () {
  homePage = new HomePage(fixture.page);
  await homePage.goto(PAGE_URL.MAIN);
  fixture.logger.info(`I open the web application on the browser`);
});

Then("The web application should be opened on the browser", async function () {
  homePage.assertHomePageIsOpened(PAGE_URL.MAIN);
});

Then("The submenu is opened", async function () {
  homePage.navMenuIsOpened();
});

Then("The search page should be opened", async function () {
  const searchFormSelector = ".search-form-input";
  await fixture.page.waitForSelector(searchFormSelector);
  expect(fixture.page.locator(searchFormSelector)).toBeVisible();
});

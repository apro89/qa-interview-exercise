import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../utils/fixture";
import { PAGE_URL } from "../util/page-url";
import SearchPage from "../pages/search-page";
import { expect } from "playwright/test";

let searchPage: SearchPage;
setDefaultTimeout(60 * 20000);

Given("I open the search page on the browser", async function () {
  searchPage = new SearchPage(fixture.page);
  await searchPage.goto(`${PAGE_URL.MAIN}${PAGE_URL.SEARCH}`);
  fixture.logger.info(`I open the search page on the browser`);
});

Then("The search page should be opened on the browser", async function () {
  searchPage.assertSearchPageIsOpened(PAGE_URL.SEARCH);
});

When(
  "I apply the filter {string} on the solution type category",
  async function (filter: string) {
    await searchPage.applyFilter();
    fixture.logger.info(`The filter ${filter} is applied`);
  }
);

Then(
  "I should see {string} result\\(s)",
  async function (expectedCount: string) {
    await expect(searchPage.resultsCounter).toContainText(
      `Showing ${expectedCount} of`,
      { timeout: 20000 }
    );
    const resultCount = await searchPage.getResultCount();
    expect(resultCount).toBe(Number(expectedCount));
    fixture.logger.info(
      `The expected result count ${expectedCount} is verified`
    );
  }
);

When(
  "I enter {string} into the search field",
  async function (searchText: string) {
    await searchPage.enterSearchText(searchText);
    fixture.logger.info(`Entered ${searchText} into the search field`);
  }
);

When("I clear the search field", async function () {
  await searchPage.clearSearchField();
  fixture.logger.info(`Search field is cleared`);
});

Then("I expect to go to product page", async function () {
  const productPageSelector = ".preferred-partner-detail-container";
  await fixture.page.waitForSelector(productPageSelector);
  expect(fixture.page.locator(productPageSelector)).toBeVisible();
});

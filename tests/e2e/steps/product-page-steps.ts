import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../utils/fixture";
import { PAGE_URL } from "../util/page-url";
import ProductPage from "../pages/product-page";

let productPage: ProductPage;
setDefaultTimeout(60 * 20000);

Given("I open the product page on the browser", async function () {
  productPage = new ProductPage(fixture.page);
  await productPage.goto(`${PAGE_URL.MAIN}${PAGE_URL.PRODUCT}`);
  fixture.logger.info(`I open the product page on the browser`);
});

Then("The product page should be opened on the browser", async function () {
  productPage.assertProductPageIsOpened(PAGE_URL.PRODUCT);
});

When("I submit the form", async function () {
  await productPage.submitForm();
  fixture.logger.info(`The form is submitted`);
});

Then("I should see error messages for all required fields", async function () {
  const expectedMessages = [
    "The name can't be empty. Please enter a valid name",
    "The email can't be empty. Please enter a valid email",
    "The country can't be empty. Please enter a valid country",
    "The message can't be empty. Please enter a valid message",
  ];
  await productPage.checkErrorMessages(expectedMessages);
  fixture.logger.info(`Error messages for all required fields are displayed`);
});

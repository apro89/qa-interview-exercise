import { When } from "@cucumber/cucumber";
import { fixture } from "../../utils/fixture";
import { expect } from "playwright/test";

When("I click the {string} button", async function (buttonText: string) {
  const button = await fixture.page.getByRole("button", {
    name: buttonText,
  });
  await button.click();
  fixture.logger.info(`The button ${buttonText} is clicked`);
});

When("I expect not to see {string}", async function (str: string) {
  const msg = await fixture.page.getByText(str);
  expect(msg).not.toBeVisible();
  fixture.logger.info(`The message ${str} should not be visible`);
});

When("I click on the link with text {string}", async function (str: string) {
  const link = await fixture.page.getByRole("link", { name: str });
  expect(link).toBeVisible();
  await link.click();
  fixture.logger.info(`The link ${str} is clicked`);
});

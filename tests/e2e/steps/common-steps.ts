import { When, Then } from "@cucumber/cucumber";
import { fixture } from "../../utils/fixture";
import { expect } from "playwright/test";

When("I click the {string} button", async function (buttonText: string) {
  const button = await fixture.page.getByRole("button", {
    name: buttonText,
    exact: true,
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

When("I should see the message {string}", async function (str: string) {
  const msg = await fixture.page.getByText(str);
  expect(msg).toBeVisible();
  fixture.logger.info(`The message ${str} should be visible`);
});

When(
  "I enter to the input with label {string} the message {string}",
  async function (label: string, text: string) {
    await fixture.page.fill(`label:has-text("${label}")`, text);
    fixture.logger.info(
      `The input with label ${label} should is filled with ${text}`
    );
  }
);

Then(
  "The input with label {string} contains the text {string}",
  async function (label: string, text: string) {
    const input = await fixture.page.locator(`label:has-text("${label}")`);
    await expect(input).toHaveValue(text);
    fixture.logger.info(`The input with label ${label} contains the ${text}`);
  }
);

When(
  "I use the select with label {string} and select option {string}",
  async function (label: string, optionLabel: string) {
    const select = await fixture.page.locator(`label:has-text("${label}")`);
    await select.selectOption({ label: optionLabel });

    fixture.logger.info(
      `The select with label ${label} should be selected with option ${optionLabel}`
    );
  }
);

Then(
  "The select with label {string} should have the option {string} selected",
  async function (label: string, optionLabel: string) {
    const select = await fixture.page.locator(`label:has-text("${label}")`);
    const selectedOption = await select.inputValue();
    await expect(selectedOption).toEqual(optionLabel);
    fixture.logger.info(
      `The select with label ${label} has the option ${optionLabel} selected`
    );
  }
);

import { Locator, Page, expect } from "@playwright/test";

export default class ProductPage {
  readonly page: Page;
  readonly errorMessages: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.errorMessages = this.page.locator(".errormessage.visible");
    this.submitButton = this.page.getByText("SUBMIT YOUR MESSAGE");
  }
  async goto(url: string) {
    await this.page.goto(url);
    await this.page.waitForURL(url);
  }

  async assertProductPageIsOpened(url: string) {
    expect(this.page.url()).toContain(url);
  }

  async checkErrorMessages(expectedMessages: string[]) {
    const errors = await this.errorMessages.all();
    for (let i = 0; i < expectedMessages.length; i++) {
      await expect(errors[i]).toContainText(expectedMessages[i]);
    }
  }

  async submitForm() {
    await this.submitButton.click();
  }
}

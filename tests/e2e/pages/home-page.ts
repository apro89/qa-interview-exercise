import { Page, expect } from "@playwright/test";
import { Locator } from "playwright";
export default class HomePage {
  readonly page: Page;
  readonly subMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.subMenu = this.page.locator("#sub-menu-container");
  }
  async goto(url: string) {
    await this.page.goto(url);
    await this.page.waitForURL(url);
  }

  async assertHomePageIsOpened(url: string) {
    expect(this.page.url()).toContain(url);
  }

  async navMenuIsOpened() {
    expect(this.subMenu).toBeVisible();
  }
}

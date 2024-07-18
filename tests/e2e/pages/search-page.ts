import { Page, expect } from "@playwright/test";
import { Locator } from "playwright";

export default class SearchPage {
  readonly page: Page;
  readonly filterLabel: Locator;
  readonly filterCheckbox: Locator;
  readonly resultsLocator: Locator;
  readonly resultsCounter: Locator;
  readonly searchField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.filterLabel = this.page.getByText("Computer Vision Hazard Detection");
    this.filterCheckbox = this.page.locator(".mat-checkbox-input").first();
    this.resultsLocator = this.page.locator(".search-results > .default-card");
    this.resultsCounter = this.page.locator(
      ".results-container .result-counter-content"
    );
    this.searchField = this.page.locator("input[formcontrolname='search']");
  }
  async goto(url: string) {
    await this.page.goto(url);
    await this.page.waitForURL(url);
  }

  async assertSearchPageIsOpened(url: string) {
    expect(this.page.url()).toContain(url);
  }

  async applyFilter() {
    await this.filterLabel.click();
    const isChecked = await this.filterCheckbox.isChecked();
    expect(isChecked).toBeTruthy();
  }

  async getResultCount(): Promise<number> {
    const results = await this.resultsLocator.count();
    return results;
  }

  async enterSearchText(text: string) {
    await this.searchField.fill(text);
  }

  async clearSearchField() {
    await this.searchField.fill("");
  }
}

import { Page, expect } from "@playwright/test";
export default class HomePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page

    }  
    async goto(url: string) {
        await this.page.goto(url)
        await this.page.waitForURL(url);
    }

    async assertHomePageIsOpened(url: string) {
        expect(this.page.url()).toContain(url);
    }


}
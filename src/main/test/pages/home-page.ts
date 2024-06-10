import { Page } from "@playwright/test";
import { fixture } from "../utils/logger/fixture";
export default class HomePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page

    }  
    async goto(url: string) {
        await this.page.goto(url)
        await this.page.waitForTimeout(1000);
        fixture.logger.error(`The "${url}" is opened`);
    }


}
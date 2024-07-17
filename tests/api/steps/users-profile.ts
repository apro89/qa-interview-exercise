import { Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { fixture } from "../../utils/fixture";
Then(
  "The response contains the correct email {string} and name {string}",
  async function (email: string, name: string) {
    const responseBody = await this.response.json();
    expect(responseBody.data.email).toEqual(email);
    expect(responseBody.data.name).toEqual(name);
    fixture.logger.info(
      `The response contains the correct email ${email} and name ${name}`
    );
  }
);

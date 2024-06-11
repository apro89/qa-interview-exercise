import { Given, Then } from "@cucumber/cucumber";
import { getEndpoint } from "../common/endpoint";
import { expect } from "playwright/test";


Given('The user execute a GET to the {string} endpoint', async function (endpointName:string) {
    this.endpoint = getEndpoint(endpointName);
    this.response = await this.endpoint.sendGetRequestWithoutToken()
  });

  Then('the response status code is {string} successful', async function (responseCode:string) {
    expect(String(this.response.status())).toEqual(responseCode);
  });

  Then('the response message is {string}', async function (message:string) {
    expect(String(await this.response.body())).toContain(message);
  });
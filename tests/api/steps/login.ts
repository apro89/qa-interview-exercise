import { Given } from "@cucumber/cucumber";
import { getEndpoint } from "../common/endpoint";
import { fixture } from "../../utils/fixture";
import apiNames from "../utils/apiNames";

Given(
  "Login as a user with email {string} and password {string}",
  async function (email: string, password: string) {
    this.endpoint = getEndpoint(apiNames.user.login);
    this.response = await this.endpoint.login(email, password);
    fixture.logger.info(
      `The user execute a POST to the ${apiNames.user.login} endpoint with ${email} and ${password}`
    );
  }
);

Given(
  "The user executes an authenticated GET to the {string} endpoint",
  async function (endpointName: string) {
    const token = this.endpoint.getAccessToken();
    this.endpoint = getEndpoint(endpointName);
    this.endpoint.setAccessToken(token);
    this.response = await this.endpoint.sendAuthenticatedGetRequest();
    fixture.logger.info(
      `The user executed an authenticated GET to the ${endpointName} endpoint`
    );
  }
);

Given("The user has an invalid token", async function () {
  this.endpoint = getEndpoint(apiNames.user.login);
  this.endpoint.setAccessToken("invalid_token");
  fixture.logger.info("The user has an invalid token set");
});

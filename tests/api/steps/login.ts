import { Given } from "@cucumber/cucumber";
import { User } from "../interfaces/user";
import { getEndpoint } from "../common/endpoint";
import { fixture } from "../../utils/fixture";
import apiNames from "../utils/apiNames";

Given(
  "Login as a user with email {string} and password {string}",
  async function (email: string, password: string) {
    this.endpoint = getEndpoint(apiNames.user.login);
    const user = new User(email, password);

    this.response = await this.endpoint.sendRequestWithBodyWithoutToken(
      user.toJSON()
    );
    fixture.logger.info(
      `The user execute a POST to the ${
        apiNames.user.login
      } endpoint with ${user.toJSON()}`
    );
  }
);

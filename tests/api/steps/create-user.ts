import { Given } from "@cucumber/cucumber";
import { User } from "../interfaces/user";
import { getEndpoint } from "../common/endpoint";
import { fixture } from "../../utils/fixture";
import apiNames from "../utils/apiNames";
import { v4 as uuidv4 } from "uuid";

Given(
  "The user executes a POST to create a unique user with name {string}, password {string}",
  async function (name: string, password: string) {
    this.endpoint = getEndpoint(apiNames.user.create);
    const uniqueEmail = `bob_${uuidv4()}@gmail.com`; // Generate a unique email using UUID
    const user = new User(uniqueEmail, password, name);

    this.response = await this.endpoint.sendRequestWithBodyWithoutToken(
      user.toJSON()
    );
    fixture.logger.info(
      `The user execute a POST to the ${
        apiNames.user.create
      } endpoint with ${user.toJSON()}`
    );
  }
);

Given(
  "The user executes a POST to create a user with name {string}, email {string}, password {string}",
  async function (name: string, email: string, password: string) {
    this.endpoint = getEndpoint(apiNames.user.create);
    const user = new User(email, password, name);

    this.response = await this.endpoint.sendRequestWithBodyWithoutToken(
      user.toJSON()
    );
    fixture.logger.info(
      `The user execute a POST to the ${
        apiNames.user.create
      } endpoint with ${user.toJSON()}`
    );
  }
);

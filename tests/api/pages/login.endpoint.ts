import { User, UserResponse } from "../interfaces/user";
import { BaseResponse } from "../interfaces/util";
import apiEndpoints from "../utils/apiEndpoints";
import BaseEndpoint from "./base-endpoint";

export default class LoginEndpoint extends BaseEndpoint {
  constructor(baseUrl: string) {
    super(baseUrl);
    this.setEndpoint(apiEndpoints.users.login);
  }

  async login(email: string, password: string) {
    const user = new User(email, password);
    const response = await this.sendRequestWithBodyWithoutToken(user.toJSON());
    const responseBody: BaseResponse<UserResponse> = await response.json();
    this.setAccessToken(responseBody?.data?.token);
    return response;
  }
}

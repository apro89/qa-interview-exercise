import { fixture } from "../../utils/fixture";

export default class BaseEndpoint {
  endpoint: string;
  accessToken: string;
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.endpoint = "";
    this.accessToken = "";
  }

  getEndpoint() {
    return this.endpoint;
  }

  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  getAccessToken() {
    return this.accessToken;
  }

  async sendGetRequestWithoutToken() {
    try {
      const apiRequest = fixture.api;
      const response = await apiRequest.get(`${this.baseUrl}${this.endpoint}`, {
        headers: {
          Accept: "application/json",
        },
      });
      return response;
    } catch (error) {
      fixture.logger.info(`Error getting the "${this.endpoint}" `, error);
      throw error;
    }
  }

  async sendRequestWithBodyWithoutToken<T>(body: T): Promise<any> {
    try {
      const apiRequest = fixture.api;
      const response = await apiRequest.post(
        `${this.baseUrl}${this.endpoint}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          data: body,
        }
      );
      return response;
    } catch (error) {
      fixture.logger.info(
        `Error post the "${this.endpoint}" with body ${body} `,
        error
      );
      throw error;
    }
  }

  async sendAuthenticatedGetRequest() {
    try {
      const apiRequest = fixture.api;

      const response = await apiRequest.get(`${this.baseUrl}${this.endpoint}`, {
        headers: {
          Accept: "application/json",
          "X-Auth-Token": this.accessToken,
        },
      });
      return response;
    } catch (error) {
      fixture.logger.info(
        `Error with authenication getting the "${this.endpoint}" `,
        error
      );
      throw error;
    }
  }

  async sendAuthenticatedPostRequest<T>(body: T): Promise<any> {
    try {
      const apiRequest = fixture.api;

      const response = await apiRequest.post(
        `${this.baseUrl}${this.endpoint}`,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": this.accessToken,
          },
          data: body,
        }
      );
      return response;
    } catch (error) {
      fixture.logger.info(
        `Error authenicated post the "${this.endpoint}" with body ${body} `,
        error
      );
      throw error;
    }
  }

  async sendAuthenticatedPutRequest<T>(body: T): Promise<any> {
    try {
      const apiRequest = fixture.api;
      const response = await apiRequest.put(`${this.baseUrl}${this.endpoint}`, {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": this.accessToken,
        },
        data: body,
      });

      return response;
    } catch (error) {
      fixture.logger.info(
        `Error authenticated put the "${this.endpoint}" with body ${body} `,
        error
      );
      throw error;
    }
  }
}

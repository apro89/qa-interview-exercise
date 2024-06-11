import { fixture } from "../../utils/fixture";

export default class BaseEndpoint {
  endpoint: string;
  accessToken: string;
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.endpoint = '';
    this.accessToken = '';
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
      const apiRequest= fixture.api;
      const response = await apiRequest.get(`${this.baseUrl}${this.endpoint}`, {
        headers: {
          'Accept': 'application/json'
        }
      });
      return response;
    } catch (error) {
      fixture.logger.info(`Error getting the "${this.endpoint}" `,error);
      throw error;
    }
  }

}
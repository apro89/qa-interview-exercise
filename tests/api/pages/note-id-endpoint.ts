import apiEndpoints from "../utils/apiEndpoints";
import BaseEndpoint from "./base-endpoint";

export default class NoteIdEndpoint extends BaseEndpoint {
  constructor(baseUrl: string) {
    super(baseUrl);
    this.setEndpoint(apiEndpoints.notes);
  }
}

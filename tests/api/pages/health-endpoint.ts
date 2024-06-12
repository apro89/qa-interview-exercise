import BaseEndpoint from "./base-endpoint";

export default  class HealthEndpoint extends BaseEndpoint {
    constructor(baseUrl: string) {
      super(baseUrl);
      this.setEndpoint(`/health-check`);
    }
   
  }
 
import CreateUserEndpoint from "../pages/create-user-endpoint";
import HealthEndpoint from "../pages/health-endpoint";
import apiNames from "../utils/apiNames";
const baseUrl =
  process.env.BASE_URL_API ?? "https://practice.expandtesting.com/notes/api";
function getEndpoint(name: string) {
  if (name === "health-check") {
    return new HealthEndpoint(baseUrl);
  } else if (name === apiNames.user.create) {
    return new CreateUserEndpoint(baseUrl);
  } else {
    console.log("The endpoint '" + name + "' is not implemented");
  }
}
export { getEndpoint };

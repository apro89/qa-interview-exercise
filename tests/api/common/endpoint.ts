import CreateUserEndpoint from "../pages/create-user-endpoint";
import HealthEndpoint from "../pages/health-endpoint";
import LoginEndpoint from "../pages/login.endpoint";
import UsersProfileEndpoint from "../pages/users-profile";
import apiNames from "../utils/apiNames";
const baseUrl =
  process.env.BASE_URL_API ?? "https://practice.expandtesting.com/notes/api";
function getEndpoint(name: string) {
  if (name === "health-check") {
    return new HealthEndpoint(baseUrl);
  } else if (name === apiNames.user.create) {
    return new CreateUserEndpoint(baseUrl);
  } else if (name === apiNames.user.login) {
    return new LoginEndpoint(baseUrl);
  } else if (name === apiNames.user.profile) {
    return new UsersProfileEndpoint(baseUrl);
  } else {
    console.log("The endpoint '" + name + "' is not implemented");
  }
}
export { getEndpoint };

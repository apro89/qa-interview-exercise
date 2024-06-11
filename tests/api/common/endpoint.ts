import HealthEndpoint from "../pages/health-endpoint";
const baseUrl =
    process.env.BASE_URL_API ?? "https://practice.expandtesting.com/notes/api";
function getEndpoint(name: string) {
    const healthEndpoint = new HealthEndpoint(baseUrl);
    if (name === "health-check") {
        return healthEndpoint;
    } else {
        console.log("The endpoint '" + name + "' is not implemented");
    }
}
export { getEndpoint };

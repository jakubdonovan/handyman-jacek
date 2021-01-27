import startServer from "./server";

require("dotenv").config({
  path: "../common/.env",
});

startServer();

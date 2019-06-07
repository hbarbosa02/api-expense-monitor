const http = require("http");
const app = require("./app");

http
  .createServer(app)
  .listen(process.env.PORT || 3000, process.env.DOMAIN || "localhost")
  .on("listening", () =>
    console.log(`Server GraphQL running on port ${process.env.PORT || 3000}.`)
  )
  .on("error", console.log);

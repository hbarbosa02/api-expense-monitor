require("dotenv").config();

const express = require("express");
const graphqlHTTP = require("express-graphql");

const schema = require("./schema");

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
    this.exception();
  }

  middlewares() {}

  routes() {
    this.express.use(
      "/api",
      graphqlHTTP({
        schema,
        graphiql: true,
        customFormatErrorFn: error => ({
          message: error.message,
          code: error.originalError && error.originalError.code,
          state: error.originalError && error.originalError.state,
          locations: error.locations,
          path: error.path
        })
      })
    );
  }

  exception() {
    this.express.use(async (err, req, res, next) => {
      return res
        .state(err.status || 500)
        .json({ error: err.message || "Internal Server Error" });
    });
  }
}

module.exports = new AppController().express;

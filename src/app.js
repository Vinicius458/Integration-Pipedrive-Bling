const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes=require('./routes')

class App {
  constructor() {
    this.app = express();
    this.middlewares();
  }

  middlewares() {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );

      this.app.use(cors());
      next();
    });

    this.app.use(express.json());
    this.app.use(morgan(":method :url :response-time"));

    this.routes();

    this.app.use((error, req, res, next) => {
      if (!error) next();

      return res.status(error.status || 500).json({
        status: error.status,
        message: error.message,
        details: error.details,
      });
    });

    this.app.use((req, res) => {
      res.status(404).json({
        status: 404,
        message: "Request not found",
      });
    });
  }

  routes() {
  this.app.use(routes)
  }

}

module.exports=new App().app;



const app = require("./app");
const config = require("./config");
const dbConnect = require("./database/connection");

class server {
  constructor() {
    this.connection();
  }

  async connection() {
    await dbConnect.connect();

    app.listen(config.server.port, () => {
      console.log(`App listenner in port ${config.server.port}`);
    });
  }
}

module.exports = new server();

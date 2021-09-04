const path = require("path");
const process = require("process");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

module.exports = {
  Mongo_Url: process.env.MONGO_URL,
  Port:process.env.PORT
};

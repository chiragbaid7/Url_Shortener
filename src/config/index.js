const path = require("path");
const process = require("process");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

module.exports = {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT,
  DOMAIN: process.env.DOMAIN,
  SECRET_KEY: process.env.SECRET_KEY,
  BASE_62: process.env.BASE_62,
};

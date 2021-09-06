const path = require("path");
const process = require("process");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

module.exports = {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT,
  URL: process.env.URL,
  SECRET_KEY: process.env.SECRET_KEY,
};

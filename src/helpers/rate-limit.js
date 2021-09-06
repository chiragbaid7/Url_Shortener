const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  max: 20,
  windowMs: 5 * 60 * 1000,
});
module.exports = {
  limiter,
};

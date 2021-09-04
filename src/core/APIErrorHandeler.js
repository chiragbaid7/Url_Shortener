//const httpStatusCode = require("./httpStatusCode");
const BaseError = require("./BaseError");

module.exports = {
  Api400Error: function (req, res, next) {
    next(BaseError.Api400Error("Invalid URL"));
  },
  ApiErrorHandeler: function (err, req, res, next) {
    if (err instanceof BaseError) {
      res.status(err.statusCode).json(err);
      return;
    }
    res.status(500).json(BaseError.Api500Error("Something went Wrong"));
  },
};

const httpStatusCode = require("./httpStatusCode");
class BaseError extends Error {
  constructor(name, statusCode, description, isOperational) {
    super(description);
    //to restore the prototype chain
    //  Object.setPrototypeOf(this, new.target.prototype);

    this.description = description;
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    //to keep track of funcitons present in the stack
    Error.captureStackTrace(this);
  }
  static Api404Error(name) {
    return new BaseError(name, httpStatusCode.NOT_FOUND, "Not Found", true);
  }
  static Api422Error(name) {
    return new BaseError(
      name,
      httpStatusCode.UNPROCESSABLE_ENTITY,
      "Unprocessable Entity",
      true
    );
  }
  static Api500Error(name) {
    return new BaseError(
      name,
      httpStatusCode.INTERNAL_SERVER,
      "Internal Sever Error",
      false
    );
  }
  static Api400Error(name) {
    return new BaseError(
      name,
      httpStatusCode.BAD_REQUEST,
      "URL Not Found",
      true
    );
  }
  static Api401Error(name) {
    return new BaseError(
      name,
      httpStatusCode.Unauthorized,
      "Authorization Required",
      true
    );
  }
}
module.exports = BaseError;

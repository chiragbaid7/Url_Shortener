const BaseError = require("../ErrorHandeler/BaseError");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/index");
const verifytoken = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const jwttoken = req.headers.authorization.split(" ")[1];
      const payload = await jwt.verify(jwttoken, SECRET_KEY);
      req.id = payload.id;
      next();
    } else {
      throw BaseError.Api401Error("Please Login to continue");
    }
  } catch (err) {
    next(BaseError.Api401Error(err.message));
  }
};
const sign = async (user_id) => {
  const jwttoken = await jwt.sign({ id: user_id }, SECRET_KEY, {
    expiresIn: "30m",
  });
  return jwttoken;
};
module.exports = { verifytoken, sign };

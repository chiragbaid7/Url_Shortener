const BaseError = require("../core/BaseError");
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
      //user has not loged in so use public apis
      throw BaseError.Api401Error("Please Login to continue");
    }
  } catch (err) {
    next(BaseError.Api401Error(err.message));
  }
};
const sign = async (user_id) => {
  const jwttoken = await jwt.sign({ id: user_id }, SECRET_KEY, {
    expiresIn: "20m",
  });
  return jwttoken;
};
module.exports = { verifytoken, sign };

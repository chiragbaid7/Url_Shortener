const { validateSignup, validateLogin } = require("../helpers/validator");
const { findUser, createUser } = require("../data-access/user");
const jwt = require("jsonwebtoken");
const BaseError = require("../core/BaseError");
const { SECRET_KEY } = require("../config/index");

const create = async (userdata) => {
  await validateSignup(userdata);
  const user = await findUser(userdata);
  if (user) {
    //Error user already present
    throw BaseError.Api401Error("User already exists,plz login!");
  }
  const user_id = await createUser(userdata);
  const jwttoken = await jwt.sign({ id: user_id }, SECRET_KEY, {
    expiresIn: "10m",
  });
  return jwttoken;
};
const find = async (userdata) => {
  //check if user exists
  await validateLogin(userdata);
  const user = await findUser(userdata);
  if (!user) {
    throw BaseError.Api401Error("User doesn't exists");
  }
  const jwttoken = await jwt.sign({ id: user._id }, SECRET_KEY, {
    expiresIn: "10m",
  });
  return jwttoken;
};

module.exports = {
  create,
  find,
};

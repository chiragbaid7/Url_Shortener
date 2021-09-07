const { validateSignup, validateLogin } = require("../helpers/validator");
const { findUser, createUser } = require("../data-access/user");
const BaseError = require("../core/BaseError");
const { sign } = require("../auth/auth");

const create = async (userdata) => {
  await validateSignup(userdata);
  const checkuser = await findUser(userdata);
  if (checkuser) {
    //Error user already present
    throw BaseError.Api401Error("User already exists,plz login!");
  }
  const user = await createUser(userdata);
  const token = await sign(user._id);
  return { token, user };
};
const find = async (userdata) => {
  //check if user exists
  await validateLogin(userdata);
  const user = await findUser(userdata);
  if (!user) {
    throw BaseError.Api401Error("User doesn't exists");
  }
  const token = await sign(user._id);
  return { token, user };
};

module.exports = {
  create,
  find,
};

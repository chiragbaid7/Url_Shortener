const User = require("../database/models/UserSchema");

const createUser = async ({ name, email, password }) => {
  const user = new User({ name: name, email: email, password: password });
  await user.save();
  return user._id;
};

const findUser = async ({ email, password }) => {
  const user = await User.findOne({ email: email, password: password });
  return user;
  //user exists cool then
};

module.exports = {
  findUser,
  createUser,
};

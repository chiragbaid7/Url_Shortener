const User = require("../database/models/UserSchema");

const createUser = async ({ name, email, password }) => {
  const newuser = new User({ name: name, email: email, password: password });
  await newuser.save();
  const user = { name: newuser.name, email: newuser.email, id: newuser._id };
  return user;
};

const findUser = async ({ email, password }) => {
  const user = await User.findOne(
    { email: email, password: password },
    "-Links -password"
  );
  return user;
  //user exists cool then
};

module.exports = {
  findUser,
  createUser,
};

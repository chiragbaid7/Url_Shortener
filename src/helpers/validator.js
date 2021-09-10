const {
  UrlSchema,
  AliasSchema,
  SignupSchema,
  LoginSchema,
} = require("./schema-validator");

const BaseError = require("../ErrorHandeler/BaseError");
module.exports = {
  validateUrl: async (longUrl) => {
    try {
      await UrlSchema.validateAsync({ Url: longUrl });
    } catch (err) {
      //throw custom error
      throw BaseError.Api422Error(err.message);
    }
  },
  validateAlias: async (alias) => {
    try {
      await AliasSchema.validateAsync({ alias: alias });
    } catch (err) {
      throw BaseError.Api422Error(err.message);
    }
  },
  validateSignup: async ({ name, email, password }) => {
    try {
      await SignupSchema.validateAsync({
        name: name,
        email: email,
        password: password,
      });
    } catch (err) {
      throw BaseError.Api422Error(err.message);
    }
  },
  validateLogin: async ({ email, password }) => {
    try {
      await LoginSchema.validateAsync({
        email: email,
        password: password,
      });
    } catch (err) {
      throw BaseError.Api422Error(err.message);
    }
  },
};

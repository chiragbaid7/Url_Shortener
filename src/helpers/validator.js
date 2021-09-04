const { UrlSchema, AliasSchema } = require("./schema");
const BaseError = require("../core/BaseError");
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
};

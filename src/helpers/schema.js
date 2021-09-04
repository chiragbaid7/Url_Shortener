const Joi = require("joi");

const UrlSchema = Joi.object().keys({
  Url: Joi.string().trim().uri().required(),
});

const AliasSchema = Joi.object().keys({
  alias: Joi.string()
    .trim()
    .length(7)
    .pattern(/^[a-zA-Z0-9]+$/),
});

module.exports = {
  UrlSchema,
  AliasSchema,
};

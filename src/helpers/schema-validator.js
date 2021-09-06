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
const SignupSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,20}$")).required(),
});

const LoginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,20}$")).required(),
});

module.exports = {
  UrlSchema,
  AliasSchema,
  SignupSchema,
  LoginSchema,
};

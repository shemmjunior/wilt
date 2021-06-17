const Joi = require("joi");

 exports.loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(20).required().email(),
    password: Joi.string().max(150).required(),
  });
  return schema.validate(data);
};

exports.registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    username: Joi.string().min(4).max(20).required(),
    password: Joi.string().min(6).max(150).required(),
  });
  return schema.validate(data);
};





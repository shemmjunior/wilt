const Joi = require("joi");

const wiltValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(6).max(60).required().email(),
    description: Joi.string().min(20).required(),
    user_id: Joi.string().min(5).max(20).required()
  });
  return schema.validate(data);
};


module.exports = { wiltValidation };

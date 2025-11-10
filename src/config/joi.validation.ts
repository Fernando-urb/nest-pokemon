import Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.required(),
  POTRT: Joi.number().default(3005),
  DEFAULT_LIMIT: Joi.number().default(6),
});

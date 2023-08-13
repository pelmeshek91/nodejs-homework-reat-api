import Joi from "joi";
import { emailRegexp } from "../constants/user-constants.js";

const usersSignUpSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": `missing required email field`,
  }),
  password: Joi.string().min(6).required(),
});
const usersSignInSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": `missing required email field`,
  }),
  password: Joi.string().min(6).required(),
});
const usersEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

export default { usersSignUpSchema, usersSignInSchema, usersEmailSchema };

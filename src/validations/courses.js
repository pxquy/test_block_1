import Joi from "joi";

export const validateCourses = Joi.object({
  courseName: Joi.string().required(),
  thumbnail: Joi.string().required(),
  note: Joi.string(),
  category: Joi.string().required(),
});

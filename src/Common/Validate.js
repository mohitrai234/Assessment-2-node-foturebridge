const Joi = require("joi");
const { sendErrorResponse } = require("./Common");

module.exports = {
    validate: (schema) => (req, res, next) => {
        const { error } = schema.validate(req.body)
        if (error) {
            res.send(sendErrorResponse(400, error.details[0].message))
        } else {
            next();
        }
    },
    addUserValidation: Joi.object().keys({
        first_name: Joi.string().min(3).max(200).required(),
        last_name: Joi.string().min(3).max(200).required(),
        email: Joi.string().email().required(),
        contact_no: Joi.string().min(10).max(10).required()
    }),
    updateUserValidation: Joi.object().keys({
        first_name: Joi.string().min(3).max(200).required(),
        last_name: Joi.string().min(3).max(200).required(),
        email: Joi.string().email().required(),
        contact_no: Joi.string().min(10).max(10).required()
    })
}
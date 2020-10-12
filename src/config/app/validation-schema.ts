import * as Joi from "@hapi/joi";

export default Joi.object({
    APP_PORT: Joi.number().default('4000'),
    APP_MODE: Joi.string().valid('development', 'production', 'test').default('development'),
    APP_PREFIX: Joi.string().default('/api/v1')
})
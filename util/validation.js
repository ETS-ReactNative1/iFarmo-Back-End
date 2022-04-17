const Joi = require('@hapi/joi');

// Register user validation
const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().trim().min(5).max(30),
        name: Joi.string().trim().min(2).max(30).required(), 
        // role: Joi.string().trim().valid('user','farmer', 'worker'),
        email: Joi.string().trim().min(8).max(30).required().email(),
        password: Joi.string().trim().min(6).max(30).required()
    });
    return schema.validate(data);
};

// Login user validation
const loginValidation = (data) => {
    const schema = Joi.object({
        login: Joi.string().trim().min(5).max(30).required(),
        password: Joi.string().trim().min(6).max(30).required()
    });
    return schema.validate(data);
};

// Update user validation
const updateUserValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().trim().min(2).max(30).required(), 
        role: Joi.string().trim().valid('user','farmer', 'worker'),
        bio: Joi.string().trim().max(250).allow(null, ''),
        contactInfo: Joi.string().trim().min(0).max(30)
    });
    return schema.validate(data);
};

// Create product validation
const productValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().trim().min(2).max(20).required(),
        type: Joi.string().trim().min(2).max(10).required(),
        description: Joi.string().trim().max(250).allow(null, ''),
        quantity: Joi.number().positive(),
        unitType: Joi.string().trim().valid('lb', 'kg', 'g', 'piece').required(),
        price: Joi.number().required().positive()
    });
    return schema.validate(data);
};



module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.updateUserValidation = updateUserValidation;
module.exports.productValidation = productValidation;

const mongoose = require('mongoose');
const Joi = require('joi');

const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
    }
}));


function validateCustomer(customer){
    const schema = {
        name: Joi.string().min(3).max(255).required(),
        phone: Joi.string().min(10).required()
        };
   return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const validator_1 = require("../validators/validator");
const AgentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name.'],
        minlength: [3, 'your name cannot be less than three letters.']
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please provide your business phone number.']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password.'],
        validate: [validator_1.isPassword, 'your password should contain a number, uppercase and lowercase letter']
    },
    businessName: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String,
        validate: [validator_1.isEmail, 'please provide a valid email']
    },
    website: {
        type: String
    },
    status: {
        type: String
    },
    bank: {
        type: String
    },
    accountNumber: {
        type: Number,
        minlength: [10, 'Account number cannot be less than 10 digits'],
        maxlength: [10, 'Account number cannot be more than 10 digits']
    },
    services: {
        type: []
    },
    regDate: {
        type: Date,
        default: () => new Date()
    },
    taxNumber: {
        type: String
    },
    logo: {
        type: String,
    },
});
exports.default = AgentSchema;

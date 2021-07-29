"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var validator_1 = require("../validators/validator");
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide a name for the user'],
        minlength: [5, 'your name cannot be less than five letters']
    },
    email: {
        type: String,
        unique: true,
        validate: [validator_1.isEmail, 'please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'please provide a password for your user'],
        validate: [validator_1.isPassword, 'your password should contain a number, uppercase and lowercase letter']
    },
    phoneNumber: {
        type: String,
        required: [true, 'please provide your phone number'],
        unique: true
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        "default": false
    }
});
exports["default"] = userSchema;

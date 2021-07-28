"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const validator_1 = require("../validators/validator");
const AdminSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username for the admin']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password for the admin'],
        validate: [validator_1.isPassword, 'your password should contain a number, uppercase and lowercase letter']
    }
});
exports.default = AdminSchema;

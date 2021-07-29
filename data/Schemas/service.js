"use strict";
exports.__esModule = true;
var mongodb_1 = require("mongodb");
var mongoose_1 = require("mongoose");
var ServiceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for the service'],
        minlength: [5, 'your name cannot be less than five letters']
    },
    categoryId: {
        type: mongodb_1.ObjectID,
        required: [true, 'Please provide the category the service belongs to']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description']
    }
});
exports["default"] = ServiceSchema;

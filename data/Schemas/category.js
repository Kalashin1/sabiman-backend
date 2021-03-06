"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for the category.'],
        minlength: [5, 'your name cannot be less than five letters.']
    },
    icon: {
        type: String,
        required: [true, 'Please provide an icon.']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description.']
    },
    image: {
        type: String,
        required: [true, 'Please Provide an image for the category.']
    }
});
exports["default"] = CategorySchema;

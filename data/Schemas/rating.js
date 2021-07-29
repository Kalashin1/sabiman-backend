"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var RatingSchema = new mongoose_1.Schema({
    requestId: {
        type: String,
        required: [true, 'Please provide the id of the request you want to rate']
    },
    customerRatingLevel: {
        type: Number,
        required: [true, 'Please provide the rating level']
    },
    customerRemark: {
        type: String,
        required: [true, 'Please provide the id of the request you want to rate']
    },
    agentRatingLevel: {
        type: String
    },
    agentRemark: {
        type: String
    }
});
exports["default"] = RatingSchema;

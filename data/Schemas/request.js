"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var RequestSchema = new mongoose_1.Schema({
    serviceId: {
        type: String,
        required: [true, "please provide a service Id for the request"]
    },
    customerId: {
        type: String,
        required: [true, "please provide a customer Id for the request"]
    },
    agentId: {
        type: String
    },
    scheduledTime: {
        type: Date,
        required: [true, "please provide a scheduled time for the request"]
    },
    type: {
        type: String,
        required: [true, "please provide the type of request"]
    },
    requestTime: {
        type: Date,
        "default": function () { return new Date(); }
    },
    status: {
        type: String,
        "default": "pending"
    },
    description: {
        type: String,
        required: [true, "Please provide a little description of the problem or service"]
    },
    images: {
        type: [String],
        required: [true, "Please provide image description of the problem"]
    }
});
exports["default"] = RequestSchema;

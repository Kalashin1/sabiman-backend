"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const service_1 = __importDefault(require("../Schemas/service"));
const ServiceSchema = mongoose_1.model('service', service_1.default);
exports.default = ServiceSchema;

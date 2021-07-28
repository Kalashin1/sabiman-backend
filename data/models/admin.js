"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcrypt"));
const mongoose_1 = require("mongoose");
const admin_1 = __importDefault(require("../Schemas/admin"));
const saltRounds = 10;
admin_1.default.pre('save', async function (next) {
    if (this.password.length < 15) {
        // * hash the users password before we save it to the databse
        this.password = await bcrypt.hash(this.password, saltRounds);
        next();
    }
    next();
});
admin_1.default.statics.login = async function (username, password) {
    const Admin = await this.findOne({ username });
    //  param if Admin with the username exists then compare passowrds
    console.log(Admin);
    if (Admin) {
        const result = await bcrypt.compare(password, Admin.password);
        if (result) {
            return Admin;
        }
        else {
            throw Error('incorrect password');
        }
    }
    throw Error('incorrect phone number, no user exists with this phone number');
};
const AdminModel = mongoose_1.model('admin', admin_1.default);
exports.default = AdminModel;

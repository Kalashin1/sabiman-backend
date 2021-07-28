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
const mongoose = __importStar(require("mongoose"));
const bcrypt = __importStar(require("bcrypt"));
// IMPORT THE USER SCHEMA
const user_1 = __importDefault(require("../Schemas/user"));
const saltRounds = 10;
//HASHING USERS PASSWORD
user_1.default.pre('save', async function (next) {
    if (this.password.length < 15) {
        // * hash the users password before we save it to the databse
        this.password = await bcrypt.hash(this.password, saltRounds);
        next();
    }
    next();
});
user_1.default.statics.login = async function (phoneNumber, password) {
    const user = await this.findOne({ phoneNumber });
    //  param if user with the phoneNumber exists then compare passowrds
    console.log(user);
    if (user) {
        const result = await bcrypt.compare(password, user.password);
        if (result) {
            return user;
        }
        else {
            throw Error('incorrect password');
        }
    }
    throw Error('incorrect phone number, no user exists with this phone number');
};
user_1.default.statics.editProfile = async function (_id, obj) {
    const user = await mongoose.model('user').findById(_id);
    const { country, state, phoneNumber, name } = obj;
    user.country = country !== null && country !== void 0 ? country : user.country;
    user.state = state !== null && state !== void 0 ? state : user.state;
    user.phoneNumber = phoneNumber !== null && phoneNumber !== void 0 ? phoneNumber : user.phoneNumber;
    user.name = name !== null && name !== void 0 ? name : user.name;
    await user.save();
    console.log(user);
    return user;
};
const userModel = mongoose.model('user', user_1.default);
exports.default = userModel;

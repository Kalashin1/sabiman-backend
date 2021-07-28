"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutAgent = exports.loginAgentWithPhoneAndPassword = exports.createAgent = void 0;
const agent_1 = __importDefault(require("../../data/models/agent"));
const jwt_handler_1 = require("../helper/jwt-handler");
exports.createAgent = async (req, res) => {
    const { name, phoneNumber, password } = req.body;
    try {
        const Agent = await agent_1.default.create({ name, phoneNumber, password });
        const token = jwt_handler_1.createToken(Agent._id);
        res.cookie('agent', token, { httpOnly: true, maxAge: jwt_handler_1.maxAge * 1000 });
        res.json(Agent);
    }
    catch (err) {
        console.log(err);
    }
};
exports.loginAgentWithPhoneAndPassword = async (req, res) => {
    const { phoneNumber, password } = req.body; // retrieve phone and password
    console.log(req.body);
    try {
        const Agent = await agent_1.default.login(phoneNumber, password);
        console.log(Agent);
        const token = jwt_handler_1.createToken(Agent._id); // create a token for that user
        res.cookie('agent', token, { httpOnly: true, maxAge: jwt_handler_1.maxAge * 1000 }); // create a cookie to hold the jwt
        res.status(200).end();
    }
    catch (err) {
        console.log(err);
        res.status(400).end();
    }
};
exports.logoutAgent = async (req, res) => {
    if (typeof req.cookies.agent !== undefined) { // if cookie with the value of jwt exists
        // res.cookie('jwt', '', {maxAge: 1}) // delete the cookie
        res.clearCookie('agent');
        res.json({ message: 'logout successfull' }); // send the user a logout successfull message
    }
    else {
        res.json({ message: 'you are not logged in' }); // notify the user that they are not logged in
    }
};

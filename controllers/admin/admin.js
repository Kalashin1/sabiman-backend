"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutAdmin = exports.loginAdminWithUsernameAndPassword = exports.createAdminWithUsernameAndPassword = void 0;
const admin_1 = __importDefault(require("../../data/models/admin"));
const jwt_handler_1 = require("../helper/jwt-handler");
// CREATING A NEW Admin
exports.createAdminWithUsernameAndPassword = async (req, res) => {
    const { password, username } = req.body;
    // console.log(req.body)
    try {
        // IF THE Admin IS CREATED SUCCESSFULLY CREATE A JWT WITH THEIR ID
        const Admin = await admin_1.default.create({ password, username });
        // CREATE A COOKIE TO HOLD THE JWT
        const token = jwt_handler_1.createToken(Admin._id);
        // send the cookie back to the Admin agent
        res.cookie('admin', token, { httpOnly: true, maxAge: jwt_handler_1.maxAge * 1000 }); // in production add secure:true
        res.status(200).json(Admin);
    }
    catch (err) {
        console.log(err); // handles the error if ther is an error
    }
};
// Login a Admin
exports.loginAdminWithUsernameAndPassword = async (req, res) => {
    const { username, password } = req.body; // retrieve phone and password
    console.log(req.body);
    try {
        const Admin = await admin_1.default.login(username, password);
        console.log(Admin);
        // login with phone and password
        // login with phone and password
        const token = jwt_handler_1.createToken(Admin._id); // create a token for that Admin
        res.cookie('admin', token, { httpOnly: true, maxAge: jwt_handler_1.maxAge * 1000 }); // create a cookie to hold the admin
        res.status(200).end();
    }
    catch (err) {
        console.log(err);
    }
};
exports.logoutAdmin = async (req, res) => {
    if (typeof req.cookies.admin !== undefined) { // if cookie with the value of admin exists
        // res.cookie('admin', '', {maxAge: 1}) // delete the cookie
        res.clearCookie('admin');
        res.json({ message: 'logout successfull' }); // send the Admin a logout successfull message
    }
    else {
        res.json({ message: 'you are not logged in' }); // notify the Admin that they are not logged in
    }
};

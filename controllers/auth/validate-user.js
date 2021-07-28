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
exports.getUser = exports.validateUser = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const user_1 = __importDefault(require("../../data/models/user"));
const validateUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'my secrete key', (err, _decodedToken) => {
            if (err) {
                // console.log(err.message)
                res.status(400).json(err.message);
            }
            else {
                // console.log(decodedToken)
                next();
            }
        });
    }
    else {
        // console.log('no cookie')
        res.status(400).json('you are not logged in');
    }
};
exports.validateUser = validateUser;
const getUser = (req, res) => {
    const token = req.cookies.jwt;
    console.log();
    if (token) {
        jwt.verify(token, 'my secrete key', async (err, decodedToken) => {
            if (err) {
                console.log(decodedToken.id);
            }
            else {
                // console.log(decodedToken)
                const user = await user_1.default.findById(decodedToken.id);
                console.log(user);
                res.json({
                    name: user === null || user === void 0 ? void 0 : user.name,
                    email: user === null || user === void 0 ? void 0 : user.email,
                    id: user === null || user === void 0 ? void 0 : user._id,
                    phoneNumber: user.phoneNumber,
                    state: user.state,
                    country: user.country
                });
            }
        });
    }
    else {
        // console.log('no cookie')
        res.status(400).json('you are not logged in');
    }
};
exports.getUser = getUser;

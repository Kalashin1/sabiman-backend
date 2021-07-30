"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.resetPassword = exports.logoutAdmin = exports.loginAdminWithUsernameAndPassword = exports.createAdminWithUsernameAndPassword = void 0;
var admin_1 = require("../../data/models/admin");
var jwt_handler_1 = require("../helper/jwt-handler");
// CREATING A NEW Admin
var createAdminWithUsernameAndPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, password, username, Admin, token, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, password = _a.password, username = _a.username;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, admin_1["default"].create({ password: password, username: username })
                    // CREATE A COOKIE TO HOLD THE JWT
                ];
            case 2:
                Admin = _b.sent();
                token = jwt_handler_1.createToken(Admin._id);
                // send the cookie back to the Admin agent
                res.cookie('admin', token, { httpOnly: true, maxAge: jwt_handler_1.maxAge * 1000 }); // in production add secure:true
                res.status(200).json(Admin);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                console.log(err_1); // handles the error if ther is an error
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createAdminWithUsernameAndPassword = createAdminWithUsernameAndPassword;
// Login a Admin
var loginAdminWithUsernameAndPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, Admin, token, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body // retrieve phone and password
                , username = _a.username, password = _a.password;
                console.log(req.body);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, admin_1["default"].login(username, password)];
            case 2:
                Admin = _b.sent();
                console.log(Admin);
                token = jwt_handler_1.createToken(Admin._id) // create a token for that Admin
                ;
                res.cookie('admin', token, { httpOnly: true, maxAge: jwt_handler_1.maxAge * 1000 }); // create a cookie to hold the admin
                res.status(200).end();
                return [3 /*break*/, 4];
            case 3:
                err_2 = _b.sent();
                console.log(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.loginAdminWithUsernameAndPassword = loginAdminWithUsernameAndPassword;
var logoutAdmin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (typeof req.cookies.admin !== undefined) { // if cookie with the value of admin exists
            // res.cookie('admin', '', {maxAge: 1}) // delete the cookie
            res.clearCookie('admin');
            res.json({ message: 'logout successfull' }); // send the Admin a logout successfull message
        }
        else {
            res.json({ message: 'you are not logged in' }); // notify the Admin that they are not logged in
        }
        return [2 /*return*/];
    });
}); };
exports.logoutAdmin = logoutAdmin;
var resetPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, oldPassword, newPassword, Admin, result, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, oldPassword = _a.oldPassword, newPassword = _a.newPassword;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, admin_1["default"].findById(id)];
            case 2:
                Admin = _b.sent();
                return [4 /*yield*/, Admin.resetPassword(oldPassword, newPassword)];
            case 3:
                result = _b.sent();
                if (result) {
                    res.json(Admin);
                }
                res.status(400).json({ message: "old password is incorrect" });
                return [3 /*break*/, 5];
            case 4:
                err_3 = _b.sent();
                console.log(err_3);
                res.status(400).json(err_3.message);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.resetPassword = resetPassword;

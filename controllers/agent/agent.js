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
exports.resetPassword = exports.changeAccountStatus = exports.updateBusinessInfo = exports.updateBankInfo = exports.removeServices = exports.AddService = void 0;
var agent_1 = require("../../data/models/agent");
var AddService = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, serviceId, Agent, services, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, id = _a.id, serviceId = _a.serviceId;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, agent_1["default"].findById(id)];
            case 2:
                Agent = _b.sent();
                return [4 /*yield*/, Agent.addService(serviceId)];
            case 3:
                services = _b.sent();
                res.json(services);
                return [3 /*break*/, 5];
            case 4:
                err_1 = _b.sent();
                console.log(err_1);
                res.end();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.AddService = AddService;
var removeServices = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, serviceId, Agent, message, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, id = _a.id, serviceId = _a.serviceId;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, agent_1["default"].findById(id)];
            case 2:
                Agent = _b.sent();
                return [4 /*yield*/, Agent.removeService(serviceId)];
            case 3:
                _b.sent();
                message = 'service deleted successfully';
                res.json({ message: message });
                return [3 /*break*/, 5];
            case 4:
                err_2 = _b.sent();
                console.log(err_2);
                res.status(400).json(err_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.removeServices = removeServices;
var updateBankInfo = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, bank, accountNumber, Agent, message, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, bank = _a.bank, accountNumber = _a.accountNumber;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, agent_1["default"].findById(id)];
            case 2:
                Agent = _b.sent();
                return [4 /*yield*/, Agent.updateBankInfo({ bank: bank, accountNumber: accountNumber })];
            case 3:
                _b.sent();
                message = 'Bank info updated successfully';
                res.json({ message: message });
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
exports.updateBankInfo = updateBankInfo;
var updateBusinessInfo = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, email, address, website, logo, businessName, taxNumber, Agent, message, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, email = _a.email, address = _a.address, website = _a.website, logo = _a.logo, businessName = _a.businessName, taxNumber = _a.taxNumber;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, agent_1["default"].findById(id)];
            case 2:
                Agent = _b.sent();
                return [4 /*yield*/, Agent.updateBusinessInfo({ email: email, address: address, website: website, logo: logo, businessName: businessName, taxNumber: taxNumber })];
            case 3:
                _b.sent();
                message = 'Business Info updated successfully';
                res.json({ message: message });
                return [3 /*break*/, 5];
            case 4:
                err_4 = _b.sent();
                console.log(err_4);
                res.status(400).json(err_4.message);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.updateBusinessInfo = updateBusinessInfo;
var changeAccountStatus = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, status, Agent, err_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = _req.params, id = _a.id, status = _a.status;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, agent_1["default"].findById(id)];
            case 2:
                Agent = _b.sent();
                return [4 /*yield*/, Agent.changeAccountStatus(status)];
            case 3:
                _b.sent();
                res.json({ message: "status updated successfully" });
                return [3 /*break*/, 5];
            case 4:
                err_5 = _b.sent();
                console.log(err_5);
                res.status(400).json(err_5);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.changeAccountStatus = changeAccountStatus;
var resetPassword = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, oldPassword, newPassword, Agent, result, err_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = _req.params.id;
                _a = _req.body, oldPassword = _a.oldPassword, newPassword = _a.newPassword;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, agent_1["default"].findById(id)];
            case 2:
                Agent = _b.sent();
                return [4 /*yield*/, Agent.resetPassword(oldPassword, newPassword)];
            case 3:
                result = _b.sent();
                if (result) {
                    res.json(Agent);
                }
                res.status(400).json({ message: "old password is incorrect" });
                return [3 /*break*/, 5];
            case 4:
                err_6 = _b.sent();
                console.log(err_6);
                res.status(400).json(err_6);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.resetPassword = resetPassword;

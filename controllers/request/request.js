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
exports.editRequest = exports.deleteRequest = exports.getRequest = exports.getAllRequests = exports.createRequest = void 0;
var request_1 = require("../../data/models/request");
var createRequest = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, customerId, serviceId, scheduledTime, type, description, images, Request_1, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, customerId = _a.customerId, serviceId = _a.serviceId, scheduledTime = _a.scheduledTime, type = _a.type, description = _a.description, images = _a.images;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, request_1["default"].create({ customerId: customerId, serviceId: serviceId, scheduledTime: scheduledTime, type: type, description: description, images: images })];
            case 2:
                Request_1 = _b.sent();
                res.json(Request_1);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                console.log(err_1);
                res.status(400).json(err_1.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createRequest = createRequest;
var getAllRequests = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requests, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, request_1["default"].find({})];
            case 1:
                requests = _a.sent();
                res.json(requests);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.log(err_2);
                res.status(400).json(err_2.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllRequests = getAllRequests;
var getRequest = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, Request_2, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = _req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, request_1["default"].findById(id)];
            case 2:
                Request_2 = _a.sent();
                res.json(Request_2);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                console.log(err_3);
                res.status(400).json(err_3.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getRequest = getRequest;
var deleteRequest = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, message, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = _req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, request_1["default"].remove({ _id: id })];
            case 2:
                _a.sent();
                message = "Request Deleted successfully";
                res.json({ message: message });
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                console.log(err_4);
                res.status(400).json(err_4.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteRequest = deleteRequest;
var editRequest = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, type, status, Request_3, message, err_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = _req.params.id;
                _a = _req.body, type = _a.type, status = _a.status;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, request_1["default"].findById(id)];
            case 2:
                Request_3 = _b.sent();
                return [4 /*yield*/, Request_3.updateOne({ type: type, status: status })];
            case 3:
                _b.sent();
                message = "Request Updated successfully";
                res.json({ message: message });
                res.json(Request_3);
                return [3 /*break*/, 5];
            case 4:
                err_5 = _b.sent();
                console.log(err_5);
                res.status(400).json(err_5.message);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.editRequest = editRequest;

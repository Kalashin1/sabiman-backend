"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteService = exports.editService = exports.getService = exports.getServices = exports.createService = void 0;
const service_1 = __importDefault(require("../../data/models/service"));
exports.createService = async (req, res) => {
    const { name, categoryId, description } = req.body;
    try {
        const Service = await service_1.default.create({ name, categoryId, description });
        res.json(Service);
    }
    catch (err) {
        console.log(err);
        res.end();
    }
};
exports.getServices = async (_req, res) => {
    try {
        const Services = await service_1.default.find({});
        res.json(Services);
    }
    catch (err) {
        console.log(err);
        res.end();
    }
};
exports.getService = async (req, res) => {
    const { id } = req.params;
    try {
        const Service = await service_1.default.findById(id);
        res.json(Service);
    }
    catch (err) {
        console.log(err);
        res.end();
    }
};
exports.editService = async (req, res) => {
    const { name, categoryId, description } = req.body;
    const { _id } = req.params;
    try {
        await service_1.default.updateOne({ _id }, { name, categoryId, description });
        const Service = await service_1.default.findById(_id);
        res.json(Service);
    }
    catch (err) {
        console.log(err);
        res.end();
    }
};
exports.deleteService = async (req, res) => {
    const { id } = req.params;
    try {
        await service_1.default.deleteOne({ _id: id });
        let message = "Service Deleted Successfully";
        res.json({ message });
    }
    catch (err) {
        console.log(err);
        res.end();
    }
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBusinessInfo = exports.updateBankInfo = exports.removeServices = exports.AddService = void 0;
const agent_1 = __importDefault(require("../../data/models/agent"));
exports.AddService = async (req, res) => {
    const { id, serviceId } = req.params;
    try {
        const Agent = await agent_1.default.findById(id);
        const services = await Agent.addService(serviceId);
        res.json(services);
    }
    catch (err) {
        console.log(err);
        res.end();
    }
};
exports.removeServices = async (req, res) => {
    const { id, serviceId } = req.params;
    try {
        const Agent = await agent_1.default.findById(id);
        await Agent.removeService(serviceId);
        const message = 'service deleted successfully';
        res.json({ message });
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
exports.updateBankInfo = async (req, res) => {
    const { id } = req.params;
    const { bank, accountNumber } = req.body;
    try {
        const Agent = await agent_1.default.findById(id);
        await Agent.updateBankInfo({ bank, accountNumber });
        const message = 'Bank info updated successfully';
        res.json({ message });
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
};
exports.updateBusinessInfo = async (req, res) => {
    const { id } = req.params;
    const { email, address, website, logo, businessName, taxNumber } = req.body;
    try {
        const Agent = await agent_1.default.findById(id);
        await Agent.updateBusinessInfo({ email, address, website, logo, businessName, taxNumber });
        const message = 'Business Info updated successfully';
        res.json({ message });
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err.message);
    }
};

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
const agent_1 = __importDefault(require("../Schemas/agent"));
const mongoose_1 = require("mongoose");
// import { ObjectId } from 'mongodb'
const saltRounds = 10;
agent_1.default.pre('save', async function (next) {
    if (this.password.length < 15) {
        // * hash the users password before we save it to the databse
        this.password = await bcrypt.hash(this.password, saltRounds);
        next();
    }
    next();
});
agent_1.default.statics.login = async function (phoneNumber, password) {
    const Agent = await this.findOne({ phoneNumber });
    //  param if Agent with the phoneNumber exists then compare passowrds
    console.log(Agent);
    if (Agent) {
        const result = await bcrypt.compare(password, Agent.password);
        if (result) {
            return Agent;
        }
        else {
            throw Error('incorrect password');
        }
    }
    throw Error('incorrect phone number, no user exists with this phone number');
};
agent_1.default.methods.addService = async function (serviceId) {
    const agentServices = this.services;
    const existingService = agentServices.find(s => s == serviceId);
    if (existingService) {
        throw new Error('Agent has already registered that service');
    }
    else {
        agentServices.push(serviceId);
        await this.update({ services: agentServices });
        return this.services;
    }
};
agent_1.default.methods.removeService = async function (serviceId) {
    const agentServices = this.services;
    const existingService = agentServices.find(s => s == serviceId);
    if (existingService) {
        const filteredService = agentServices.filter(s => s !== serviceId);
        await this.update({ services: filteredService });
    }
    else {
        throw new Error('Agent is not registered to that service');
    }
};
agent_1.default.methods.updateBankInfo = async function (Obj) {
    const { bank, accountNumber } = Obj;
    await this.updateOne({ bank, accountNumber });
};
agent_1.default.methods.updateBusinessInfo = async function (obj) {
    const { email, address, website, logo, businessName, taxNumber } = obj;
    await this.updateOne({ email, address, website, logo, businessName, taxNumber });
};
const AgentModel = mongoose_1.model('agent', agent_1.default);
exports.default = AgentModel;

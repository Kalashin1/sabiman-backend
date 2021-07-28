"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const validate_user_1 = require("./controllers/auth/validate-user");
// OUR CUSTOM IMPORTS WILL SIT HERE
// IMPORTING OUR DIFF ROUTERS
const router_1 = require("./router/router");
// * Category Router
const category_router_1 = __importDefault(require("./router/category-router"));
// * Service Router
const service_router_1 = __importDefault(require("./router/service-router"));
// * Agent Router
const agent_router_1 = require("./router/agent-router");
// * ADMIN ROUTER
const admin_router_1 = require("./router/admin-router");
// CREATING OUR SEVER APP WITH EXPRESS
const app = express();
// OUR APP WILL RUN ON THE PORT GIVEN BELOW
const PORT = 5000;
// THIS STRING IS THE LINK TO OUR MONGODB
const url = 'mongodb://localhost:27017/sabi'; //
// const url = 'mongodb+srv://kalashin:Kalashin1@cluster0.4umw1.gcp.mongodb.net/crypto?retryWrites=true&w=majority'
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    exposedHeaders: ['set-cookie']
};
// MIDDLEWARES
app.use(cors(corsOptions));
//  COOKIE PARSER
app.use(cookieParser());
// JSON PARSER
app.use(express.json());
// AUTH ROUTER
app.use(router_1.router);
// CATEGORY ROUTER
app.use(category_router_1.default);
// SERVICE ROUTER
app.use(service_router_1.default);
// AGENT ROUTER
app.use(agent_router_1.router);
// ADMIN ROUTER
app.use(admin_router_1.router);
// routes
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((_result) => app.listen(process.env.PORT || PORT, () => console.log(`app running on port ${process.env.PORT || PORT}`)))
    .catch((err) => console.log(err));
app.get('/user', validate_user_1.getUser);

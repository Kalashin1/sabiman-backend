"use strict";
exports.__esModule = true;
var express = require('express');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var validate_user_1 = require("./controllers/auth/validate-user");
// OUR CUSTOM IMPORTS WILL SIT HERE
// IMPORTING OUR DIFF ROUTERS
var router_1 = require("./router/router");
// * Category Router
var category_router_1 = require("./router/category-router");
// * Service Router
var service_router_1 = require("./router/service-router");
// * Agent Router
var agent_router_1 = require("./router/agent-router");
// * ADMIN ROUTER
var admin_router_1 = require("./router/admin-router");
var request_1 = require("./router/request");
// CREATING OUR SEVER APP WITH EXPRESS
var app = express();
// OUR APP WILL RUN ON THE PORT GIVEN BELOW
var PORT = 5000;
// THIS STRING IS THE LINK TO OUR MONGODB
var url = 'mongodb://localhost:27017/sabi'; //
// const url = 'mongodb+srv://kalashin:Kalashin1@cluster0.4umw1.gcp.mongodb.net/crypto?retryWrites=true&w=majority'
var corsOptions = {
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
app.use(category_router_1["default"]);
// SERVICE ROUTER
app.use(service_router_1["default"]);
// AGENT ROUTER
app.use(agent_router_1.router);
// ADMIN ROUTER
app.use(admin_router_1.router);
app.use(request_1["default"]);
// routes
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(function (_result) { return app.listen(process.env.PORT || PORT, function () { return console.log("app running on port " + (process.env.PORT || PORT)); }); })["catch"](function (err) { return console.log(err); });
app.get('/user', validate_user_1.getUser);

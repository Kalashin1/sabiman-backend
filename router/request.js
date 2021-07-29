"use strict";
exports.__esModule = true;
var express_1 = require("express");
var request_1 = require("../controllers/request/request");
var rating_1 = require("../controllers/request/rating");
var router = express_1.Router();
router.post('/request', request_1.createRequest);
router.get('/requests', request_1.getAllRequests);
router.get('/request/:id', request_1.getRequest);
router.patch('/request/:id', request_1.editRequest);
router["delete"]('/request/:id', request_1.deleteRequest);
router.post('/rating', rating_1.createRating);
router.patch('/rating/:id', rating_1.agentRating);
router.get('/rating', rating_1.getRatings);
router.get('/rating/:id', rating_1.getRating);
exports["default"] = router;

const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')


import { getUser } from './controllers/auth/validate-user'


// OUR CUSTOM IMPORTS WILL SIT HERE

// IMPORTING OUR DIFF ROUTERS
import { router } from './router/router';
// * Category Router
import CategoryRouter from './router/category-router'
// * Service Router
import ServiceRouter from './router/service-router'
// * Agent Router
import { router as AgentRouter } from './router/agent-router'
// * ADMIN ROUTER
import { router as AdminRouter} from './router/admin-router'

import RequestRouter from './router/request'

// CREATING OUR SEVER APP WITH EXPRESS
const app = express()
// OUR APP WILL RUN ON THE PORT GIVEN BELOW
const PORT = 5000;
// THIS STRING IS THE LINK TO OUR MONGODB
const url = 'mongodb://localhost:27017/sabi' //



// const url = 'mongodb+srv://kalashin:Kalashin1@cluster0.4umw1.gcp.mongodb.net/crypto?retryWrites=true&w=majority'

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  exposedHeaders: ['set-cookie']
}

// MIDDLEWARES
app.use(cors(corsOptions))
//  COOKIE PARSER
app.use(cookieParser())
// JSON PARSER
app.use(express.json())
// AUTH ROUTER
app.use(router)
// CATEGORY ROUTER
app.use(CategoryRouter)
// SERVICE ROUTER
app.use(ServiceRouter)
// AGENT ROUTER
app.use(AgentRouter)
// ADMIN ROUTER
app.use(AdminRouter)

app.use(RequestRouter)
// routes

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then((_result: any) => app.listen(process.env.PORT || PORT, () => console.log(`app running on port ${process.env.PORT || PORT}`)))
.catch((err: any) => console.log(err))


app.get('/user', getUser)

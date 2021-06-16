const express = require('express')
const serverless = require('serverless-http')
const mongoose = require('mongoose')
const db = require('./config/mongo.config')

const app = express()
app.use(express.json());
const router = express.Router();

mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })

require('./api/wilt/routes')(router)


app.use('/.netlify/functions/server', router)
module.exports.handler = serverless(app);
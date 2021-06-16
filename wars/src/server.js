const express = require('express')
const serverless = require('serverless-http')
const mongoose = require('mongoose')
const db = require('./config/mongo.config')

const app = express()
app.use(express.json());
const router = express.Router();

mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })

const wilt = require('./api/wilt')
const profile = require('./api/profile')

router.post('/wilt', wilt.create)
router.get('/wilt', wilt.index)
router.get('/wilt/:id', wilt.findOne)
router.put('/wilt/:id', wilt.update)
router.delete('/wilt/:id', wilt.delete)



app.use('/.netlify/functions/server', router)
module.exports.handler = serverless(app);
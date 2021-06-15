const express = require('express')
const serverless = require('serverless-http')

const app = express()
const router = express.Router();

const wilt = require('./api/wilt')
const profile = require('./api/profile')

router.get('/create', wilt.create)
router.get('/wilts', wilt.index)




app.use('/.netlify/functions/server', router)
module.exports.handler = serverless(app);
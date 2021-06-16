require('dotenv').config()
const express = require('express')
const serverless = require('serverless-http')
const mongoose = require('mongoose')
const db = require('./config/mongo.config')


const app = express()
app.use(express.json());
const router = express.Router();

mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true });
// .then(() => console.log('Connection Success')).catch((err) => console.log('Error Connectiong', err))

require('./api/wilt/routes')(router)
require('./api/auth/routes')(router)



// app.listen(4000, () => console.log('Server is Up'))

app.use('/.netlify/functions/server', router)

module.exports.handler = serverless(app);
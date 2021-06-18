// require('dotenv').config()
const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
const mongoose = require('mongoose')
const db = require('./config/mongo.config')


const app = express()
app.use(express.json());

app.use(cors({
    origin: "*",
    "methods": "GET,PUT,POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    credentials: true
}));

const router = express.Router();

mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true });
// .then(() => console.log('Connection Success')).catch((err) => console.log('Error Connectiong', err))

require('./api/wilt/routes')(router)
require('./api/auth/routes')(router)
require('./api/profile/routes')(router)



// app.listen(4000, () => console.log('Server is Up'))

app.use('/.netlify/functions/server', router)

module.exports.handler = serverless(app);
require("dotenv").config()
require("./database")

const express = require('express')
const bodyParser = require("body-parser")

const limiter = require("./middleware/rateLimit");

const registerRoute = require("./api/register");
const loginRoute = require("./api/login");

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(limiter)


app.use("/api/v1/", [registerRoute, loginRoute]);

module.exports = app;
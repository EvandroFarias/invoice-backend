require("dotenv").config();
require("./database");
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')

const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const itemRoute = require("./routes/item");
// const invoiceRoute = require("./routes/invoice");

const limiter = require("./middleware/rateLimit");
const app = express();

app.use(cors({origin: '*', exposedHeaders: true}));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(limiter); // Later use
// app.use(express.urlencoded({ extended: true, })); // body-parser Deprecated ????

app.use("/api/v1/", [registerRoute, loginRoute, itemRoute]);

module.exports = app;

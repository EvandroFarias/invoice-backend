require("dotenv").config();
require("./database");
const express = require("express");
// const bodyParser = require("body-parser");

const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const itemRoute = require("./routes/item");
const invoiceRoute = require("./routes/invoice")

const limiter = require("./middleware/rateLimit");
const app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter);
// app.use(express.urlencoded({ extended: true, })); // body-parser Deprecated ????

app.use("/api/v1/", [registerRoute, loginRoute, itemRoute, invoiceRoute]);

module.exports = app;

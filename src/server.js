const PORT = 3030;

const consign = require("consign");
const express = require("express");
const bodyParser = require("body-parser");

require("./database");

const registerRoute = require("./api/register");
const loginRoute = require("./api/login");

const limiter = require("./middleware/rateLimit")
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(limiter)
// app.use(express.urlencoded({ extended: true, })); // body-parser Deprecated ????

app.use("/api/v1/", [registerRoute, loginRoute]);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
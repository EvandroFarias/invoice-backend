const PORT = 3030;

const consign = require("consign");
const express = require("express");
const bodyParser = require("body-parser");

require("./database");

const userRoutes = require("./routes/user");
const limiter = require("./middlewares/rateLimit")
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(limiter)
// app.use(express.urlencoded({ extended: true, })); // body-parser Deprecated ????

app.use("/api/v1/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const PORT = 3030;

const consign = require("consign");
const express = require("express");
require("./database");

const userRoutes = require("./routes/user");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

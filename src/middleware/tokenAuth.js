const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {
    const token = req.header("Acess-token")
    const verified = jwt.verify(token, process.env.JWT_KEY);

    if (verified) {
      return next();
    }
  } catch (e) {
    return res.status(401).json({ Error: "Authentication failed " + e.message });
  }
  return res.status(401).json({ Error: "Authentication Failed" });
};

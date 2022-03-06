const { default: rateLimit } = require("express-rate-limit");

module.exports = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 100,
  message: {Error: "Too many requests"}
})

const { default: rateLimit } = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 100,
  message: "You have exceeded the 100 requests in 24 hrs limit!",
});

module.exports = limiter
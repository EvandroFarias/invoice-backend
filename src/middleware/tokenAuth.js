const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    userToken = req.header('x-access-token');
    verify = jwt.verify(userToken, process.env.JWT_KEY);
    if (verify.user_id == req.params.user_id) {
      next();
    } else {
      return res
        .status(401)
        .json({ Error: "Authentication failed"});
    }
  } catch (e) {
    return res
      .status(401)
      .json({ Error: "Authentication failed " + e.message });
  }
};

const User = require("../models/User");

module.exports = {
  async authenticate(req, res, next) {
    const { email, password } = req.body;

    try {
      await User.findOne({ where: { email } }).then((e) => {
        if (!e) {
          return res
            .status(404)
            .json({ Error: "Email or password does not match" });
        } else {
          next()
        }
      });
    } catch (error) {
      next(error);
    }
    if (!password) {
      return res.status(400).json({ Error: "Password must be given." });
    }
  },
};

const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async register(req, res) {
    var { userName, password, email } = req.body;

    exists = (await User.findAll({ where: { userName } })).length;

    if (!userName.length || !password.length || !email.length) {
      return res
        .status(400)
        .json({ "Missing Fields": "Form not properly filled by user." });
    }
    if (exists) {
      return res.status(400).json({ Error: "User name already taken." });
    }

    try {
      var password = (await bcrypt.hash(password, 10)).toString();
      const user = await User.create({ userName, password, email });
      return res.status(201).json(user);
    } catch (e) {
      console.log(e);
      res.send({ "BCrypt Error": "Something went wrong !" });
    }
  },

  async login(req, res) {
    var { userName, password } = req.body;

    const user = await User.findOne({ where: { userName } });

    if (!password.length) {
      return res.status(400).json({ Error: "Password must be given." });
    }

    if (!user || !bcrypt.compare(password, user.password)) {
      return res.status(400).json({ Error: "Password or Login invalid." });
    }

    res.send("ok");
  },
};

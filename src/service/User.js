const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async register(req, res) {
    var { firstName, lastName, email, password } = req.body;

    exists = await User.findOne({ where: { email } });

    if (
      !firstName.length ||
      !lastName.length ||
      !password.length ||
      !email.length
    ) {
      return res
        .status(400)
        .json({ message: "Form not properly filled by user." });
    }
    if (exists) {
      return res.status(400).json({ Message: "Email already registered." });
    }

    try {
      var password = (await bcrypt.hash(password, 10)).toString();
      const user = await User.create({
        firstName,
        lastName,
        password,
        email: email.toLowerCase(),
      });
      return res.status(201).json({
        message: `Registered sucessfully, e-mail confirmation sent to ${user.email}`,
      });
    } catch (e) {
      res.send({ message: e.message });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    await bcrypt.compare(password, user.password).then((resolve) => {
      if (!resolve) {
        return res
          .status(400)
          .json({ message: "Email or password does not match." });
      }
      return res.status(200).json(
        `Logged in as ${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`
      );
    });
  },
};

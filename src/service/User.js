const User = require("../models/User");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_KEY;

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
        .json({ Error: "Form not properly filled by user." });
    }
    if (exists) {
      return res.status(400).json({ Error: "Email already registered." });
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
        Message: `Registered sucessfully, e-mail confirmation sent to ${user.email}`,
      });
    } catch (e) {
      return res.status(404).send({ Error: e.message });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    await bcrypt.compare(password, user.password).then((resolve) => {
      if (!resolve) {
        return res
          .status(400)
          .json({ Error: "Email or password does not match." });
      }
      const token = jwt.sign(
        {
          user_id: user.id,
          email: user.email,
        },
        SECRET,
        {
          expiresIn: "2h",
        }
      );

      res.set('Access-Control-Expose-Headers', 'x-access-token')
      res.set("x-access-token", token);

      return res.status(200).json({ Message: "Logged in" });
    });
  },

  async checkUserEmail(req, res) {
    const { email } = req.params;
    const user = await User.findOne({ where: { email } });
    res.json(!!user);
  },
};

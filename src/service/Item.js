const Item = require("../models/Item");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { name, value } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ Error: "User not found" });
    }

    try {
      const item = await Item.create({
        name,
        value,
      });

      await user.addItem(item);

      return res.status(201).json(item);
    } catch (e) {
      return res.status(404).json(e.message);
    }
  },
};

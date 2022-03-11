const Item = require("../models/Item");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      attributes: [],
      include: {
        association: "items",
        as: "item",
        attributes: ["name", "value"],
      },
    });

    return res.json(user.items);
  },

  async store(req, res) {
    const { email } = req.params;
    const { name, value } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const item = await Item.create({
      name,
      value,
      user_id: user.id,
    });

    return res.json(item);
  },
};

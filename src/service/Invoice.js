const User = require("../models/User");
const Invoice = require("../models/Invoice");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const invoice = await Invoice.findAll({
      where: { user_id },
      attributes: ["name"],
      include: {
        association: "items",
        as: "item",
        attributes: ["id", "name", "value"],
      },
    });

    res.json(invoice);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ Error: "User not found" });
    }

    try {
      const invoice = await Invoice.create({ name, user_id: user.id });

      return res.json(invoice);
    } catch (e) {
      return res.json(e.message);
    }
  },
};

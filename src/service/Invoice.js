const User = require("../models/User");
const Invoice = require("../models/Invoice");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const invoice = await Invoice.findAll({
      where: { user_id },
      attributes: ["id", "name"],
      include: {
        association: "items",
        attributes: ["id", "name", "value"],
      },
    });

    res.json(invoice);
  },

  async findByPk(req, res) {
    const { invoice_id } = req.params;

    try {
      const invoice = await Invoice.findByPk(invoice_id, {
        attributes: ["id", "name", "created_at", "updated_at"],
        include: {
          association: "items",
          attributes: ["name", "value"],
        },
      });
      return res.json(invoice);
    } catch (e) {
      return res.json({ Error: e.message });
    }
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

  async single(req, res) {},
};

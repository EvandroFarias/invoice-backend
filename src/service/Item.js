const Item = require("../models/Item")
const Invoice = require("../models/Invoice")

module.exports = {
  async index(req, res) {
    const { user_id } = req.params

    const user = await User.findByPk(user_id, {
      attributes: [],
      include: {
        association: "items",
        as: "item",
        attributes: ["name", "value"],
      },
    })

    return res.json(user.items)
  },

  async store(req, res) {
    const { invoice_id } = req.params
    const { name, value } = req.body

    const invoice = await Invoice.findByPk(invoice_id)

    if (!invoice) {
      return res.status(404).json({ Error: "Invoice not found" })
    }

    try {
      const item = await Item.create({
        name,
        value,
        invoice_id,
      })

      return res.json(item)
    } catch (e) {
      return res.json(e.message)
    }
  },

  async delete(req, res) {
    const { item_id } = req.params

    const item = await Item.findByPk(item_id)

    if (!item) {
      return res.status(404).json({ Error: "Item not found" })
    }

    try {
      Item.destroy({ where: { id: item.id } })
      return res.status(200).json(item)
    } catch (e) {
      return res.json(e.message)
    }
  },
}

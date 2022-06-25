const { Model, DataTypes } = require("sequelize")
const User = require("./User")
const { v4: uuidv4 } = require("uuid")

class Invoice extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      }
    )

    Invoice.beforeCreate((user) => (user.id = uuidv4()))
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" })
    this.hasMany(models.Item, { foreignKey: "invoice_id", as: "items" })
  }
}

module.exports = Invoice

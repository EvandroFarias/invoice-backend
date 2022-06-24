const { Model, DataTypes } = require("sequelize");
const User = require("./User");
const { v4: uuidv4 } = require("uuid");

class Item extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        value: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "items",
      }
    );

    Item.beforeCreate((item) => (item.id = uuidv4()));
  }

  static associate(models) {
    this.belongsTo(models.Invoice, { foreignKey: "invoice_id", as: "invoice" });
  }
}

module.exports = Item;

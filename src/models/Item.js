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

    Item.beforeCreate((user) => (user.id = uuidv4()));
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
  // static associate(models) {
  //   this.belongsToMany(models.User, {
  //     foreignKey: "item_id",
  //     through: "invoice",
  //     as: "user",
  //   });
  // }
}

module.exports = Item;

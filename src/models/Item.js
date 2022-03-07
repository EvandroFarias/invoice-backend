const { Model, DataTypes } = require("sequelize");

class Item extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        value: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "item"
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: "item_id",
      through: "invoice",
      as: "user",
    });
  }
}

module.exports = Item;

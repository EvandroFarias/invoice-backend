const { Model, DataTypes } = require("sequelize");

class Invoice extends Model {
  static init(sequelize) {
    super.init(
      {
        item: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = Invoice;

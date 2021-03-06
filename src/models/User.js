const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        fullName: {
          type: DataTypes.VIRTUAL,
          get() {
            return `${this.firstName} ${this.lastName}`;
          },
        },
        password: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );

    this.beforeCreate((user) => (user.id = uuidv4()));
  }

  static associate(models) {
    this.hasMany(models.Invoice, {foreignKey: "user_id", as :"owner"})
  }
}

module.exports = User;

const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Item = require("../models/Item");
const User = require("../models/User");

const connection = new Sequelize(dbConfig);

User.init(connection);
Item.init(connection);

User.associate(connection.models);
Item.associate(connection.models);

module.exports = connection;

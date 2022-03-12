const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Item = require("../models/Item");
const User = require("../models/User");
const Invoice = require("../models/Invoice");

const connection = new Sequelize(dbConfig);

User.init(connection);
Invoice.init(connection)
Item.init(connection);

User.associate(connection.models)
Invoice.associate(connection.models)
Item.associate(connection.models)

module.exports = connection

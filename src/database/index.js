const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Invoice = require("../models/Invoice");

const User = require("../models/User");

const connection = new Sequelize(dbConfig)

User.init(connection)
Invoice.init(connection)

User.associate(connection.models)
Invoice.associate(connection.models)

module.exports = connection
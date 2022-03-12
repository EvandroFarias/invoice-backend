"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("items", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      invoice_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "invoices", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      value: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("items");
  },
};

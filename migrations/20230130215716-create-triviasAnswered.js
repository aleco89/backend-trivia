"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usersAnswers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addColumn("usersAnswers", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    });
    await queryInterface.addColumn("usersAnswers", "triviaId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "trivias", key: "id" },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usersAnswers");
  },
};

"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("questions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.STRING(150),
      } /*
      triviaId: {
        type: Sequelize.NUMBER
      },*/,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addColumn("questions", "triviaId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "trivia", key: "id" },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("questions");
  },
};

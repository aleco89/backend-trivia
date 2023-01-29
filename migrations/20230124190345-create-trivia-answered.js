"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("triviaAnswereds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      score: {
        type: Sequelize.INTEGER,
      },
      correctAnserws: {
        type: Sequelize.INTEGER,
      },
      incorrectAnswers: {
        type: Sequelize.INTEGER,
      } /*
      userId: {
        type: Sequelize.NUMBER
      },
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
    await queryInterface.addColumn("triviaAnswereds", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "user", key: "id" },
    });
    await queryInterface.addColumn("triviaAnswereds", "triviaId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "trivia", key: "id" },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("triviaAnswereds");
  },
};

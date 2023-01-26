"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("answers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      answer: {
        type: Sequelize.STRING,
      },
      isCorrect: {
        type: Sequelize.BOOLEAN,
      },
      /*
      questionId: {
        type: Sequelize.NUMBER
      },*/
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addColumn("answers", "questionId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "question", key: "id" },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("answers");
  },
};

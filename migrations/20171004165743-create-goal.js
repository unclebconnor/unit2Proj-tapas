'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('goals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      interval: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.TEXT
      },
      reflection: {
        type: Sequelize.TEXT
      },
      timeRating: {
        type: Sequelize.INTEGER
      },
      focusRating: {
        type: Sequelize.INTEGER
      },
      progressRating: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('goals');
  }
};
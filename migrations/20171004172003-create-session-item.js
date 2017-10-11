'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sessionItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sessionLogId: {
        type: Sequelize.INTEGER
      },
      goalId: {
        type: Sequelize.INTEGER
      },
      activityTypeId: {
        type: Sequelize.INTEGER
      },
      activityType: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      time: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.TEXT
      },
      notes: {
        type: Sequelize.TEXT
      },
      chordProgressionId: {
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
    return queryInterface.dropTable('sessionItems');
  }
};
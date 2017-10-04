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
      sessionId: {
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
      chordProgId: {
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
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('chordProgSegments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      harmonicElementId: {
        type: Sequelize.INTEGER
      },
      melodicElementId: {
        type: Sequelize.INTEGER
      },
      harmName: {
        type: Sequelize.STRING
      },
      melName: {
        type: Sequelize.STRING
      },
      harmEasyScore: {
        type: Sequelize.STRING
      },
      melFirstFour: {
        type: Sequelize.STRING
      },
      melSecondFour: {
        type: Sequelize.STRING
      },
      sequence: {
        type: Sequelize.INTEGER
      },
      chordProgressionId: {
        type: Sequelize.INTEGER
      },
      beats: {
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
    return queryInterface.dropTable('chordProgSegments');
  }
};
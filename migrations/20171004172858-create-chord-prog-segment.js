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
      harmId: {
        type: Sequelize.INTEGER
      },
      melId: {
        type: Sequelize.INTEGER
      },
      sequence: {
        type: Sequelize.INTEGER
      },
      beats: {
        type: Sequelize.INTEGER
      },
      harmString: {
        type: Sequelize.STRING
      },
      melString: {
        type: Sequelize.STRING
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
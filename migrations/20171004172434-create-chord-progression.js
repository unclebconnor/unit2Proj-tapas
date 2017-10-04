'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('chordProgressions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      link: {
        type: Sequelize.STRING
      },
      measureCount: {
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.INTEGER
      },
      keySignatureString: {
        type: Sequelize.STRING
      },
      keySignatureId: {
        type: Sequelize.INTEGER
      },
      timeSignatureId: {
        type: Sequelize.INTEGER
      },
      timeSignatureString: {
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
    return queryInterface.dropTable('chordProgressions');
  }
};
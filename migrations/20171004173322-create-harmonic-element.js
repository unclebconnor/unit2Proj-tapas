'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('harmonicElements', {
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
      notes: {
        type: Sequelize.STRING
      },
      firstInv: {
        type: Sequelize.STRING
      },
      secondInv: {
        type: Sequelize.STRING
      },
      thirdInv: {
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
    return queryInterface.dropTable('harmonicElements');
  }
};
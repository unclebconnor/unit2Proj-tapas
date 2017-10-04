'use strict';
module.exports = (sequelize, DataTypes) => {
  var sessionItemsChordProgressions = sequelize.define('sessionItemsChordProgressions', {
    sessionItemId: DataTypes.INTEGER,
    chordProgressionId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return sessionItemsChordProgressions;
};
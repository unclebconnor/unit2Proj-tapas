'use strict';
module.exports = (sequelize, DataTypes) => {
  var melodicElement = sequelize.define('melodicElement', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    notesDur: DataTypes.STRING,
    notes: DataTypes.STRING,
    firstFour: DataTypes.STRING,
    secondFour: DataTypes.STRING,
    firstFourDur: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.melodicElement.hasMany(models.chordProgSegment);
      }
    }
  });
  return melodicElement;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var chordProgSegment = sequelize.define('chordProgSegment', {
    harmonicElementId: DataTypes.INTEGER,
    melodicElementId: DataTypes.INTEGER,
    harmString: DataTypes.STRING,
    melString: DataTypes.STRING,
    sequence: DataTypes.INTEGER,
    chordProgressionId: DataTypes.INTEGER,
    beats: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.chordProgSegment.belongsTo(models.chordProgression);
        models.chordProgSegment.belongsTo(models.harmonicElement);
        models.chordProgSegment.belongsTo(models.melodicElement);
      }
    }
  });
  return chordProgSegment;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var chordProgSegment = sequelize.define('chordProgSegment', {
    harmId: DataTypes.INTEGER,
    melId: DataTypes.INTEGER,
    sequence: DataTypes.INTEGER,
    beats: DataTypes.INTEGER,
    harmString: DataTypes.STRING,
    melString: DataTypes.STRING
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
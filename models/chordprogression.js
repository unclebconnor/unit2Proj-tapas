'use strict';
module.exports = (sequelize, DataTypes) => {
  var chordProgression = sequelize.define('chordProgression', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    link: DataTypes.STRING,
    measureCount: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    keySignature: DataTypes.INTEGER,
    keySignatureString: DataTypes.STRING,
    timesignature: DataTypes.INTEGER,
    timeSignatureString: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        models.chordProgression.belongsTo(models.user);
        models.chordProgression.hasMany(models.chordProgSegment);
        models.chordProgression.hasMany(models.sessionItem);
      }
    }
  });
  return chordProgression;
};
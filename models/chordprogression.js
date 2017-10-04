'use strict';
module.exports = (sequelize, DataTypes) => {
  var chordProgression = sequelize.define('chordProgression', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    link: DataTypes.STRING,
    measureCount: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    keySignatureString: DataTypes.STRING,
    keySignatureId: DataTypes.INTEGER,
    timeSignatureId: DataTypes.INTEGER,
    timeSignatureString: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return chordProgression;
};
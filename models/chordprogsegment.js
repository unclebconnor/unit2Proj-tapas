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
        // associations can be defined here
      }
    }
  });
  return chordProgSegment;
};
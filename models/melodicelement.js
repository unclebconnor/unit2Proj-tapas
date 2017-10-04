'use strict';
module.exports = (sequelize, DataTypes) => {
  var melodicElement = sequelize.define('melodicElement', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    notesAsc: DataTypes.STRING,
    notesDesc: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.melodicElement.hasMany(models.chordProgSegment);
      }
    }
  });
  return melodicElement;
};
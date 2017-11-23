
'use strict';
module.exports = (sequelize, DataTypes) => {
  var harmonicElement = sequelize.define('harmonicElement', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    notes: DataTypes.STRING,
    easyScore: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.harmonicElement.hasMany(models.chordProgSegment);
      }
    }
  });
  return harmonicElement;
};
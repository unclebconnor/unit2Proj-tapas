'use strict';
module.exports = (sequelize, DataTypes) => {
  var goal = sequelize.define('goal', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    interval: DataTypes.STRING,
    status: DataTypes.STRING,
    detail: DataTypes.TEXT,
    reflection: DataTypes.TEXT,
    timeRating: DataTypes.INTEGER,
    focusRating: DataTypes.INTEGER,
    progressRating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return goal;
};
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
        models.goal.hasMany(models.sessionItem);
        models.goal.belongsTo(models.user);
      }
    }
  });
  return goal;
};
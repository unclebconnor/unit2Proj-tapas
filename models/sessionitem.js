'use strict';
module.exports = (sequelize, DataTypes) => {
  var sessionItem = sequelize.define('sessionItem', {
    sessionId: DataTypes.INTEGER,
    goalId: DataTypes.INTEGER,
    activityTypeId: DataTypes.INTEGER,
    activityType: DataTypes.STRING,
    title: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    time: DataTypes.STRING,
    link: DataTypes.TEXT,
    notes: DataTypes.TEXT,
    chordProgId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return sessionItem;
};
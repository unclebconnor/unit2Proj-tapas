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
        models.sessionItem.belongsTo(models.sessionLog);
        models.sessionItem.belongsTo(models.goal);
        models.sessionItem.belongsToMany(models.chordProgression, 
          {through: "sessionItemsChordProgressions"});
        models.sessionItem.belongsToMany(models.activityType, 
          {through: "sessionItemsActivityTypes"});
      }
    }
  });
  return sessionItem;
};
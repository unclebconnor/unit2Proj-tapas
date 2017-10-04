'use strict';
module.exports = (sequelize, DataTypes) => {
  var activityType = sequelize.define('activityType', {
    userId: DataTypes.INTEGER,
    activityName: DataTypes.STRING,
    detail: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        models.activityType.belongsTo(models.user);
        models.activityType.belongsToMany(models.sessionItem, 
          {through: "sessionItemsActivityTypes"});
      }
    }
  });
  return activityType;
};
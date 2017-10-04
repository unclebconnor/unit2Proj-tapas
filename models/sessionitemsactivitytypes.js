'use strict';
module.exports = (sequelize, DataTypes) => {
  var sessionItemsActivityTypes = sequelize.define('sessionItemsActivityTypes', {
    sessionItemId: DataTypes.INTEGER,
    activityTypeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return sessionItemsActivityTypes;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var sessionLog = sequelize.define('sessionLog', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    dateString: DataTypes.STRING,
    notes: DataTypes.TEXT,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return sessionLog;
};
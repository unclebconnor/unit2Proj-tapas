'use strict';
module.exports = (sequelize, DataTypes) => {
  var sessionLog = sequelize.define('sessionLog', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    dateString: DataTypes.STRING,
    notes: DataTypes.TEXT,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.sessionLog.belongsTo(models.user);
        models.sessionLog.hasMany(models.sessionItem);
      }
    }
  });
  return sessionLog;
};

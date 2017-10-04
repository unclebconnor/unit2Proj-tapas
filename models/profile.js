'use strict';
module.exports = (sequelize, DataTypes) => {
  var profile = sequelize.define('profile', {
    userId: DataTypes.INTEGER,
    bio: DataTypes.TEXT,
    webLinks: DataTypes.TEXT,
    level: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return profile;
};
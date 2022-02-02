"use strict";

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "userNotifications",
    {
      title: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      message: {
        type: DataTypes.STRING,
        allowNull: true
      },
      device: {
        type: DataTypes.TEXT,
        allowNull: true
      },
    },
    {
      tableName: "user_notifications",
      timestamps: false
    }
  );
};

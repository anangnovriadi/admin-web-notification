"use strict";

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "manifest",
    {
      waybill_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      manifest_code: {
        type: DataTypes.STRING,
        allowNull: true
      },
      manifest_description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      manifest_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      manifest_time: {
        type: DataTypes.TIME,
        allowNull: true
      },
      city_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {
      tableName: "manifest",
      timestamps: false
    }
  );
};

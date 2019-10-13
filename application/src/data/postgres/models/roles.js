"use strict";
module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define(
    "roles",
    {
      id: {
        type: DataTypes.UUID,
        foreignKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  roles.associate = function(models) {
    // associations can be defined here
    roles.hasMany(models.userRoles, {
      as: "listRoles",
      foreignKey: "idRole"
    });
  };
  return roles;
};

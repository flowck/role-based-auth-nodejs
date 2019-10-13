"use strict";
module.exports = (sequelize, DataTypes) => {
  const userRoles = sequelize.define(
    "userRoles",
    {
      idRole: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "roles",
          key: "id"
        }
      },
      idUser: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      }
    },
    {}
  );
  userRoles.associate = function(models) {
    // associations can be defined here
    userRoles.belongsTo(models.roles);
    userRoles.belongsTo(models.users);
  };
  return userRoles;
};

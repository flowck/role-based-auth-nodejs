"use strict";
module.exports = (sequelize, DataTypes) => {
  const userRoles = sequelize.define(
    "userRoles",
    {
      idRole: DataTypes.UUID,
      idUser: DataTypes.UUID
    },
    {}
  );
  userRoles.associate = function(models) {
    // associations can be defined here
  };
  return userRoles;
};

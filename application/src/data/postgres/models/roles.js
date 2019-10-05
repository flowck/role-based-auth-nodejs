"use strict";
module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define(
    "roles",
    {
      name: DataTypes.STRING
    },
    {}
  );
  roles.associate = function(models) {
    // associations can be defined here
  };
  return roles;
};

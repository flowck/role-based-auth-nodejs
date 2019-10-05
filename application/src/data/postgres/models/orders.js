"use strict";
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    "orders",
    {
      code: DataTypes.UUID,
      product: DataTypes.STRING,
      price: DataTypes.FLOAT,
      date: DataTypes.DATE,
      status: DataTypes.ENUM,
      customerName: DataTypes.STRING
    },
    {}
  );
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};

"use strict";
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    "orders",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      code: DataTypes.UUID,
      product: DataTypes.STRING,
      price: DataTypes.FLOAT,
      date: DataTypes.DATE,
      status: {
        type: DataTypes.ENUM("PAID", "UNPAID"),
        defaultValue: "UNPAID"
      },
      customerName: DataTypes.STRING
    },
    {}
  );
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};

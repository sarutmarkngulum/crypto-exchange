const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class TradeMatching extends Model {
}

TradeMatching.init(
  {
    trade_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    buyer_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "users", key: "user_id" },
    },
    seller_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "users", key: "user_id" }, 
    },
    crypto_type: {
      type: DataTypes.ENUM("BTC", "ETH", "XRP", "DOGE"),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    price_per_unit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("SUCCESS", "FAILED"),
      allowNull: false,
      defaultValue: "SUCCESS",
    },
  },
  {
    sequelize,
    modelName: "TradeMatching",
    tableName: "trade_matchings",
    timestamps: true,
  }
);

module.exports = TradeMatching;

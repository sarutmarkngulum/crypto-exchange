const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Wallet extends Model {
}

Wallet.init(
  {
    wallet_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "users", key: "user_id" }, 
    },
    currency_type: {
      type: DataTypes.ENUM("BTC", "ETH", "XRP", "DOGE", "THB", "USD"),
      allowNull: false,
    },
    balance: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Wallet",
    tableName: "wallets",
    timestamps: true,
  }
);

module.exports = Wallet;

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Transaction extends Model {
}

Transaction.init(
  {
    transaction_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    from_wallet_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "wallets", key: "wallet_id" }, 
    },
    to_wallet_id: {
      type: DataTypes.UUID,
      references: { model: "wallets", key: "wallet_id" }, 
      allowNull: true,
    },
    crypto_type: {
      type: DataTypes.ENUM("BTC", "ETH", "XRP", "DOGE"),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    transaction_fee: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM("PENDING", "COMPLETED", "FAILED"),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Transaction",
    tableName: "transactions",
    timestamps: true,
  }
);

module.exports = Transaction;

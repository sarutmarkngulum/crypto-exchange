const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class FiatTransaction extends Model {
}

FiatTransaction.init(
  {
    fiat_transaction_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "users", key: "user_id" },
    },
    transaction_type: {
      type: DataTypes.ENUM("DEPOSIT", "WITHDRAWAL"),
      allowNull: false,
    },
    fiat_currency: {
      type: DataTypes.ENUM("THB", "USD"),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("PENDING", "COMPLETED", "FAILED"),
      allowNull: false,
      defaultValue: "PENDING",
    },
  },
  {
    sequelize,
    modelName: "FiatTransaction",
    tableName: "fiat_transactions",
    timestamps: true,
  }
);

module.exports = FiatTransaction;

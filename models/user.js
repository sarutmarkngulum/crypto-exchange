const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class User extends Model {
  // ดึง Wallets ทั้งหมดของ User
  async getWallets() {
    return await Wallet.findAll({ where: { user_id: this.user_id } });
  }

  // ดึง Orders ทั้งหมดของ User
  async getOrders() {
    return await Order.findAll({ where: { user_id: this.user_id } });
  }

  // ดึง Fiat Transactions ทั้งหมดของ User
  async getFiatTransactions() {
    return await FiatTransaction.findAll({ where: { user_id: this.user_id } });
  }
}
User.init(
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;

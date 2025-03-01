const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Order extends Model {
  // ดึงข้อมูลเจ้าของคำสั่งซื้อ/ขาย
  async getUser() {
    return await sequelize.models.User.findOne({ where: { user_id: this.user_id } });
  }

}

Order.init(
  {
    order_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "users", key: "user_id" }, 
    },
    order_type: {
      type: DataTypes.ENUM("BUY", "SELL"),
      allowNull: false,
    },
    crypto_type: {
      type: DataTypes.ENUM("BTC", "ETH", "XRP", "DOGE"),
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
    price_per_unit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("PENDING", "COMPLETED", "CANCELLED", "FAILED"),
      allowNull: false,
      defaultValue: "PENDING",
    },
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "orders",
    timestamps: true,
  }
);

module.exports = Order;

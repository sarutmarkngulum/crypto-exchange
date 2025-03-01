const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

// นำเข้าโมเดลทั้งหมด
const User = require("./user");
const Wallet = require("./wallet");
const Order = require("./order");
const TradeMatching = require("./tradeMatching");
const Transaction = require("./transaction");
const FiatTransaction = require("./fiatTransaction");

const setupAssociations = () => {
  User.hasMany(Wallet, { foreignKey: "user_id" });
  Wallet.belongsTo(User, { foreignKey: "user_id" });

  User.hasMany(Order, { foreignKey: "user_id" });
  Order.belongsTo(User, { foreignKey: "user_id" });

  User.hasMany(TradeMatching, { foreignKey: "buyer_id", as: "buyerTrades" });
  User.hasMany(TradeMatching, { foreignKey: "seller_id", as: "sellerTrades" });
  TradeMatching.belongsTo(User, { foreignKey: "buyer_id", as: "buyer" });
  TradeMatching.belongsTo(User, { foreignKey: "seller_id", as: "seller" });

  Wallet.hasMany(Transaction, { foreignKey: "from_wallet_id", as: "outgoingTransactions" });
  Wallet.hasMany(Transaction, { foreignKey: "to_wallet_id", as: "incomingTransactions" });
  Transaction.belongsTo(Wallet, { foreignKey: "from_wallet_id", as: "fromWallet" });
  Transaction.belongsTo(Wallet, { foreignKey: "to_wallet_id", as: "toWallet" });

  User.hasMany(FiatTransaction, { foreignKey: "user_id" });
  FiatTransaction.belongsTo(User, { foreignKey: "user_id" });
};

module.exports = {
  sequelize,
  User,
  Wallet,
  Order,
  TradeMatching,
  Transaction,
  FiatTransaction,
  setupAssociations
};

const { Transaction, Wallet } = require("../models");

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({ include: [{ model: Wallet, as: "fromWallet" }, { model: Wallet, as: "toWallet" }] });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllTransactions };

const { FiatTransaction, User } = require("../models");

const getAllFiatTransactions = async (req, res) => {
  try {
    const transactions = await FiatTransaction.findAll({ include: [User] });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = { getAllFiatTransactions };

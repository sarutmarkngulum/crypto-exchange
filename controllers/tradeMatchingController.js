const { TradeMatching, User } = require("../models");

const getAllTrades = async (req, res) => {
  try {
    const trades = await TradeMatching.findAll({ include: [{ model: User, as: "buyer" }, { model: User, as: "seller" }] });
    res.json(trades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllTrades };

const { User, Wallet, Order, FiatTransaction } = require("../models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ include: [Wallet, Order, FiatTransaction] });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllUsers};

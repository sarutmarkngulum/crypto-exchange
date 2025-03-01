const { Order, User } = require("../models");

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ include: [User] });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllOrders};

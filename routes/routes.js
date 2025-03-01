const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const orderController = require("../controllers/orderController");
const tradeController = require("../controllers/tradeMatchingController");
const transactionController = require("../controllers/transactionController");
const fiatTransactionController = require("../controllers/fiatTransactionController");

// User Routes
router.get("/users", userController.getAllUsers);

// Order Routes
router.get("/orders", orderController.getAllOrders);

// Trade Matching Routes
router.get("/trades", tradeController.getAllTrades);

// Crypto Transactions Routes
router.get("/transactions", transactionController.getAllTransactions);

// Fiat Transactions Routes
router.get("/fiat-transactions", fiatTransactionController.getAllFiatTransactions);


module.exports = router;

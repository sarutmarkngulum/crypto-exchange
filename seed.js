const { sequelize, User, Wallet, Order, TradeMatching, Transaction, FiatTransaction } = require("./models");

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true }); 
    console.log("Database synced!");

   // Users
    const users = await User.bulkCreate(
        [
        { username: "user1", email: "user1@gmail.com", password: "password123" },
        { username: "user2", email: "user2@gmail.com", password: "password123" },
        ],
        { returning: true } 
    );
    console.log("Users created!");

    // Wallets
    const wallets = await Wallet.bulkCreate(
    [
        { user_id: users[0].user_id, currency_type: "BTC", balance: 1.5 }, 
        { user_id: users[0].user_id, currency_type: "ETH", balance: 10 },
        { user_id: users[1].user_id, currency_type: "BTC", balance: 0.8 },
        { user_id: users[1].user_id, currency_type: "ETH", balance: 5 },
    ],
    { returning: true }
    );
    console.log("Wallets created!");

    // Orders
    const orders = await Order.bulkCreate([
        { user_id: users[0].user_id, order_type: "BUY", crypto_type: "BTC", fiat_currency: "THB", amount: 0.5, price_per_unit: 20000 },
        { user_id: users[1].user_id, order_type: "SELL", crypto_type: "ETH", fiat_currency: "USD", amount: 1, price_per_unit: 22000 }
      ]);
      
    console.log("Orders created!");

    //TradeMatching
    const trades = await TradeMatching.bulkCreate([
        {
          buyer_id: orders[0].user_id,
          seller_id: orders[1].user_id,
          crypto_type: orders[0].crypto_type,
          amount: 0.5,
          price_per_unit: orders[0].price_per_unit, 
          status: "SUCCESS",
        },
    ]);
    console.log("Trades created!");

    // Transactions
    const transactions = await Transaction.bulkCreate([
        {
          from_wallet_id: wallets[2].wallet_id, 
          to_wallet_id: wallets[0].wallet_id,   
          crypto_type: "BTC",                     
          amount: 0.5,       
          status: "COMPLETED",                    
        },
      ]);
    console.log("Transactions created!");

    // Fiat Transactions
    const fiatTransactions = await FiatTransaction.bulkCreate([
        { user_id: users[0]?.user_id, transaction_type: "DEPOSIT", fiat_currency: "USD", amount: 5000, status: "PENDING" },
        { user_id: users[1]?.user_id, transaction_type: "WITHDRAW", fiat_currency: "USD", amount: 1000, status: "PENDING" },
    ]);
    console.log("Fiat Transactions created!");

    console.log("✅ Database seeding completed!");
    process.exit(); 
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();

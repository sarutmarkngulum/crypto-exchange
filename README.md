![er-diagram](https://github.com/user-attachments/assets/bc01a740-7db6-4cb8-a22d-c7c41e540d2c)
![er-diagram](https://github.com/user-attachments/assets/1f0d9b91-985e-4b4b-9444-8ffee1ef47c3)

## วิธีการติดตั้งและรันโปรเจกต์

### ติดตั้ง Dependencies

```sh
npm install
```

### Seed ข้อมูลเริ่มต้นเข้า Database
```sh
node seed.js
```

✅ หากสำเร็จ จะขึ้นข้อความ:
```
Database synced!
Users created!
Wallets created!
Orders created!
Trades created!
Transactions created!
Fiat Transactions created!
✅ Database seeding completed!
```

---

### รันเซิร์ฟเวอร์

```sh
node server.js
```

### ทดสอบ API


#### ✅ ดึงข้อมูล Users
```sh
GET http://localhost:3000/api/users
```

#### ✅ ดึงข้อมูล Orders
```sh
GET http://localhost:3000/api/orders
```

#### ✅ ดึงข้อมูล Trade Matching 
```sh
GET http://localhost:3000/api/trades
```

#### ✅ ดึงข้อมูล Transactions
```sh
GET http://localhost:3000/api/transactions
```

#### ✅ ดึงข้อมูล Fiat Transactions
```sh
GET http://localhost:3000/api/fiat-transactions
```

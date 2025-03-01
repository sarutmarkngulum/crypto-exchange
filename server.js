const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const { sequelize, setupAssociations } = require("./models");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/api", routes);

setupAssociations();


sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

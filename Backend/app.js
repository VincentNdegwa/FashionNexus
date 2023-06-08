const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

port = 5000;
require("dotenv").config();
const productRoute = require("./Routes/routes");
const connectDb = require("./db/database");

// middle-ware
app.use(express.static("../FrontEnd/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/data", productRoute);

// the server to resolve client route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../FrontEnd/dist/index.html"));
});

// start server
const startServer = async () => {
  await connectDb(process.env.MONGO_URL2);
  console.log("Database connected");
};
startServer();

app.listen(port, () => console.log(`listening at ${port} ......,,,`));

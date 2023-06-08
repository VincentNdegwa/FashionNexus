const express = require("express");
const app = express();

const { connectDatabase, ObjectId } = require("./connect/product");

let db;
let bucket;
const port = process.env.PORT || 5000;
const startDb = async () => {
  try {
    const { db: database, bucket: fileBucket } = await connectDatabase();
    db = database;
    bucket = fileBucket;
    console.log("Database connected!");
    app.listen(port, console.log(`Server listening at ${port} ....`));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { db, bucket, startDb, ObjectId };

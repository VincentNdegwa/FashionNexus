const { MongoClient, ObjectId } = require("mongodb");
const GridFSBucket = require("mongodb").GridFSBucket;
require("dotenv").config();

let db;
let bucket;

const connectDatabase = async () => {
  try {
    console.log("db trying");
    const client = await MongoClient.connect(process.env.MONGO_URL);
    db = client.db();
    bucket = new GridFSBucket(db);
    return { db, bucket };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { connectDatabase, ObjectId };

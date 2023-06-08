// const connectDb = require("./db/database");
// const taskSchema = require("./module/product");
// const product = require("./data.json");
// const fs = require("fs");
// const mongoose = require("mongoose");

// require("dotenv").config();

// const start = async () => {
//   try {
//     console.log("Trying to connect...");
//     await connectDb(process.env.MONGO_URL);
//     console.log("Connected to MongoDB");
//     await saveData();
//     console.log("All products saved successfully!");
//   } catch (error) {
//     console.log(error);
//   }
// };

// const saveData = async () => {
//   try {
//     const gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db);

//     for (let item of product) {
//       await new Promise((resolve, reject) => {
//         const imageBuffer = fs.readFileSync(item.img);

//         const writeStream = gfs.openUploadStream(item.img, { chunkSize: 1024 });

//         writeStream.write(imageBuffer);
//         writeStream.end();

//         writeStream.on("finish", async (file) => {
//           const newProduct = new taskSchema({
//             image: file._id, // Store the file ID in the 'image' field
//             name: item.name,
//             price: item.price,
//             desc: item.desc,
//             category: item.category,
//             target: item.target,
//           });

//           try {
//             await newProduct.save();
//             console.log("Product saved:", newProduct.name);
//             resolve(); // Resolve the promise when the save operation completes
//           } catch (error) {
//             console.error("Error saving product:", error);
//             reject(error); // Reject the promise if there's an error
//           }
//         });

//         writeStream.on("error", (error) => {
//           console.error("Error saving image:", error);
//           reject(error); // Reject the promise if there's an error
//         });
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

// /============================================================

const connectDb = require("./db/database");
const taskSchema = require("./module/product");
const product = require("./data.json");
const fs = require("fs");
// const mongoose = require("mongoose");

require("dotenv").config();

const start = async () => {
  try {
    console.log("Trying to connect...");
    await connectDb(process.env.MONGO_URL2);
    console.log("Connected to MongoDB");
    await saveData();
    console.log("All products saved successfully!");
  } catch (error) {
    console.log(error);
  }
};

const saveData = async () => {
  try {
    const data = [];

    for (let item of product) {
      const object = {
        img: item.img, // Update field name to 'image'
        name: item.name,
        price: item.price,
        desc: item.desc,
        category: item.category,
        target: item.target,
      };

      data.push(object);
    }
    console.log(data);

    await taskSchema.insertMany(data);

    console.log("Data saved successfully!");
  } catch (error) {
    console.log(error);
  }
};

// start();

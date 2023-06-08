const taskSchema = require("../module/product");
// const { sortBy } = require('lodash');

const getAllProducts = async (req, res) => {
  try {
    const data = await taskSchema.find({}).sort({ category: 1 });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
const getUniqueProducts = async (req, res) => {
  console.log("products called");

  try {
    const queryObject = {};

    const { category, target, price, priceValue, sort } = req.query;
    if (category) {
      queryObject.category = category;
    }
    if (target) {
      queryObject.target = target;
    }
    if (price && priceValue === "lt") {
      queryObject.price = { $lt: price };
      console.log(queryObject);
      // console.log(price);
    }
    if (price && priceValue === "gt") {
      queryObject.price = { $gt: price };
      console.log(queryObject);
      // console.log(price);
    }
    let data = await taskSchema.find(queryObject);

    // sort
    if (sort) {
      const sortFields = sort.split(",");
      const sortObject = {};

      sortFields.forEach((field) => {
        const [key, order] = field.split(":").map((item) => item.trim());
        sortObject[key] = order === "1" ? 1 : -1;
      });

      data = data.sort((a, b) => {
        for (const field in sortObject) {
          if (a[field] < b[field]) return sortObject[field];
          if (a[field] > b[field]) return -sortObject[field];
        }
        return 0;
      });
    }

    res.status(200).json({ nbHit: data.length, data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateOneProduct = async (req, res) => {
  try {
    const product = await taskSchema.findByIdAndUpdate(
      "6474ef51424dc53497383250",
      { $set: { price: 150 } }
    );
    res.status(201).json(product);
  } catch (error) {
    console.log(console.log(error));
  }
};

module.exports = { getAllProducts, getUniqueProducts, updateOneProduct };

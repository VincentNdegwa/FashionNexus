const mongoose = require("mongoose");

const productScema = new mongoose.Schema({
  img: {
    type: String,
    required: [true, `image is missing`],
  },
  name: String,
  price: Number,
  desc: String,
  category: String,
  target: String,
  rating: {
    type: Number,
    default: 4,
  },
});
module.exports = mongoose.model("Product", productScema);

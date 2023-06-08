const mongoose = require("mongoose");

const connectDb = (URL) => {
  return mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = connectDb;

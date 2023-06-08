const express = require("express");
const router = express.Router();
const {
  getUniqueProducts,
  getAllProducts,
  updateOneProduct,
} = require("../controllers/Products");

router.route("/").get(getAllProducts);

router.route("/products").get(getUniqueProducts);
router.route("/static").get(updateOneProduct);

module.exports = router;

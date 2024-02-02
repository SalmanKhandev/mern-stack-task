const Product = require("../models/productDB.js");

const searchProduct = async (req, res) => {
  try {
    const name = req.params.name;
    const product = await Product.find({ title: name });
    return res.json(product);
  } catch (error) {
    console.log(error);
    res.render("404");
  }
};

module.exports = searchProduct;

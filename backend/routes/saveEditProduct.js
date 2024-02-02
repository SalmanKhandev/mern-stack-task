const Product = require("../models/productDB.js");

const saveEditProduct = async (req, res) => {
  const id = req.params.id || req.query.id;
  const title = req.body.title;
  const description = req.body.description;
  const quantity = req.body.quantity;
  const price = req.body.price;
  const category = req.body.category;

  try {
    const product = await Product.findOne({ _id: id });

    if (title) {
      product.title = title;
    }
    if (description) {
      product.description = description;
    }
    if (quantity) {
      product.quantity = quantity;
    }
    if (price) {
      product.price = price;
    }

    if (category) {
      product.category = category;
    }

    await product.save();

    // await Product.findOneAndUpdate(
    //   { _id: id },
    //   { title, description, quantity, price, category }
    // );
  } catch (error) {
    console.log(error);
    res.status(404);
    res.render("404");
  }

  res.json("Saved the edited product successfully!");
};

module.exports = saveEditProduct;

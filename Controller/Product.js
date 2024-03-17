const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("quotes.json", "utf-8"));
// const quotes = data.quotes;

const model = require("../model/model");
const mongoose = require("mongoose");
const Product = model.Product;

exports.createQuote = async (req, res) => {
  const prodcut = new Product(req.body);

  // prodcut.title = "iphone 12";
  try {
    await prodcut.save();
    res.status(201).json(prodcut);
  } catch (error) {
    res.status(500).json(error);
  }

  // prodcut.save((err, doc)=>(console.log("first"))) no longer accepts callback
};
exports.getAllQuotes = async (req, res) => {
  const products = await Product.find();
  res.status(201).json(products);
};

exports.getQuote = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({ error: "Invalid ID" });
    return;
  }
  const products = await Product.findById(id).exec();
  if (!products) {
    res.status(404);
  } else {
    res.status(200).json(products);
  }
};

exports.DeleteQuote = async (req, res) => {
  const id = req.params.id;
  const products = await Product.deleteOne({ _id: id });

  res.status(200).json(products);
};

exports.patchUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(404).json({ error: "Invalid ID" });
      return;
    }
    const products = await Product.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();
    if (!products) {
      res.status(404);
    } else {
      res.status(200).json(products);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.putUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(500).json("Error Not Found");
    } else {
      const products = await Product.findOneAndReplace({ _id: id }, req.body, {
        new: true,
      }).exec();
      res.status(201).json(products);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

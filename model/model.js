const mongoose = require("mongoose");
const { Schema } = mongoose;
const productsSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: String,
  price: { type: Number, required: true },
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});
exports.Product = mongoose.model("Product", productsSchema);

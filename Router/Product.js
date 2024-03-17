const express = require("express");
const productController = require("../Controller/Product");
const router = express.Router();
 router
  .get("/api", productController.getAllQuotes)
  .get("/api/products/:id", productController.getQuote)
  .post("/api/products", productController.createQuote)
  .put("/api/products/:id", productController.putUpdate)
  .patch("/api/products/:id", productController.patchUpdate)
  .delete("/api/products/:id", productController.DeleteQuote);

exports.router = router;
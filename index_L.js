const express = require("express");
const server = express();
const cors = require("cors");
require("dotenv").config();
const path = require("path");

// Define routes using the router
const productctRouter = require("./Router/Product");

// const allowedOrigins = ['http://localhost:5173']; // Add other origins as needed

// // Configure CORS options
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: ['GET', 'POST','DELETE','PATCH','PUT'], // Allow only GET and POST methods
//   optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// // Use CORS middleware with options
// // server.use(cors(corsOptions));

// getting-started mongoosh connection
const mongoose = require("mongoose");
main().catch((err) => console.log(err));
async function main() {
  // await mongoose.connect("mongodb://127.0.0.1:27017/localDB"); local database url 
  await mongoose.connect(process.env.MONGODB_URL)
  console.log("Database connected successfully!");
}

//core middleware set header
server.use(cors());
server.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Specify your frontend domain instead of *
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Include OPTIONS for preflight requests
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Include other headers if needed
  res.setHeader("Access-Control-Allow-Credentials", true); // Set to true if handling credentials
  next();
});

server.use(express.json());
server.use("/", productctRouter.router);
server.use(express.static(path.join(__dirname, process.env.PUBLIC_DIR)));

// Handle OPTIONS requests for preflight
server.options("*", (req, res) => {
  res.sendStatus(200);
});

// if server not find any frontend routes then try it this middleware
// server.use('*', function (req, res) {
//   res.sendFile(path.resolve(__dirname, 'dist','index.html'))
// })
// error handling middleware err
server.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

server.listen(process.env.SERVER_PORT || 8080, () => {
  console.log("Server Started...");
});

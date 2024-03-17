// const http = require("http");
// const url = require("url");
// const fs = require("fs");
// const fs = require('fs')
// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// const products = data.products;
// http
//   .createServer((req, res) => {
//     if (req.url.startsWith("/product")) {
//       const id = req.url.split("/")[2];
//       const product = products.find((p) => p.id === Number(id));
//       res.setHeader("Content-Type", "text/html");
//       const modifidIndex = index
//         .replace("**title**", product.title)
//         .replace("**description**", product.description).replace("**images**", product.thumbnail).replace("**price**", product.price);
//         res.end(modifidIndex);
//         return;
//     }
//     switch (req.url) {
//       case "/":
//         res.setHeader("Content-Type", "text/html");
//         res.end(index);
//         break;
//       case "/api":
//         res.setHeader("Content-Type", "application/json");
//         res.end(JSON.stringify(data));
//         break;
//       case "/product":
//         res.setHeader("Content-Type", "text/html");
//         const modifidIndex = index
//           .replace("**Title**", product.title)
//           .replace("**Rating**", product.rating);
//         res.end(modifidIndex);
//         break;
//       default:
//         res.end(404);
//     }
//   })
//   .listen(8080);

// const http = require("http");
// const { url } = require('inspector');

// const server = http.createServer((req, res) => {
  // if (req.method === "GET" && req.url === "/endpoint") {
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("GET request to /endpoint");
  //   res.end(index);
  // } else if (req.method === "POST" && req.url === "/endpointpost") {
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("POST request to /endpointpost");
  //   res.end(index);
  // } else {
  //   res.writeHead(404);
  //   res.end("404 Not Found");
  // }
  // const parseUrl = (req.url, true);
  // const pathname = parseUrl.pathname;
  // if (req.method === "GET" && pathname === "/demo") {
  //   const productId = parseUrl.query.product;

  //   if (productId) {
  //     res.setHeader("Content-Type", "text/html");
  //     res.write(`Product page for ID: ${productId}`);
  //     res.end();
  //   }
  // }
//   switch (req.url) {
//     case '/endpoint':
//       res.setHeader("Content-Type", "text/html");
//       res.write("GET request to withServerrs/endpoint");
//       res.end(index);
//       break;
   
//     case '/endpointpost':
//       res.setHeader("Content-Type", "text/html");
//       res.write("POST request to /endpointpost");
//       res.end(index);
//       break;
//     default:
//       res.writeHead(404);
//       res.end("404 Not Found");
//    }

 
// })
// server.listen(8080)


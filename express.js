const express = require("express");
const server = express();
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
const morgan = require("morgan");

//middleware
//Parser
server.use(express.json());
// server.use(express.urlencoded())  body parser hide password to send

//REST API Standerd
//get all /products

// *************** CURD*****************

server.get("/products", (req, res) => {
  res.json(products);
});
//get  /products/:id
server.get("/product/:id", (req, res) => {
  const id = Number(req.params.id); // this id will string  so convert Number and using+
  //  const id = +req.params.id;
  if (isNaN(id)) {
    res.sendStatus(400);
  }

  const product = products.find((f) => f.id === id);
  if (!product) {
    res.sendStatus(400);
  } else {
    res.json(product);
  }
});

//Create   POST /products
server.post("/products", (req, res) => {
  // console.log(req.body);
  products.push(req.body);
  res.json(products);
});
//Update PUT /prodcuts
server.put("/product/:id", (req, res) => {
  const id = Number(req.params.id);
  const prodcutsIndex = products.findIndex((f) => f.id === id);

  products.splice(prodcutsIndex, 1, { ...req.body, id: id });

  products.push(req.body);
  res.status(201).json(products);
});

//Update PATCH /prodcuts/:id
server.patch("/product/:id", (req, res) => {
  const id = Number(req.params.id);
  const prodcutsIndex = products.findIndex((f) => f.id === id);
   const product = products[prodcutsIndex]
  products.splice(prodcutsIndex, 1, { ...product,...req.body, });

  products.push(req.body);
  res.status(201).json();
});

//Delete  DELETE /prodcuts/:id
server.delete("/product/:id", (req, res) => {
  const id = Number(req.params.id);
  const prodcutsIndex = products.findIndex((f) => f.id === id);
   const product = products[prodcutsIndex]
  products.splice(prodcutsIndex, 1);

  products.push(req.body);
  res.status(201).json(product);
});














// server.use(morgan('dev'))
// server.use(morgan('default'))
// server.use(express.static('public'))
// server.use((req, res, next) => {
//     console.log(req.method, req.ip, new Date(),req.get('User-Agent'))
//     next()
// })

// const auth = ((req, res, next) => {
//     if (req.body.password=123) {
//         next()

//     }
//     else {
//         res.send(401)
//     }
// })

// // server.use(auth)
// server.get('/product/:id', auth, (req, res) => {
//     console.log(req.params)
//     res.json({'type':'Params Id Product'})
// })
// server.post('/',auth, (req, res) => {
//     res.json({'type':'POST'})
// })
// server.put('/', (req, res) => {
//     res.json({'type':'PUT'})
// })
// server.delete('/', (req, res) => {
//     res.json({'type':'DELETE'})
// })
// server.patch('/', (req, res) => {
//     res.json({'type':'PATCH'})
// })

// server.get('/demo', (req, res) => {
//     // res.sendStatus(201).send("Express Server Start")
//     res.json(products)
//     res.sendFile("File Path")
// })

server.listen(8080, () => {
  console.log("Express Server Start now...");
});

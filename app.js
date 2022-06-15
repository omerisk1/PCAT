const express = require("express");
const ejs = require("ejs");
const app = express();
const port = 3000;
const path = require("path");

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.static("public"));

//ROUTE
app.get("/", (req, res) => {
  res.render('index');
});
app.get("/about", (req, res) => {
    res.render('about');
  });
  app.get("/add", (req, res) => {
    res.render('add');
  });

app.listen(port, () => {
  console.log(`${port} una baglanildi.`);
});

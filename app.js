const express = require("express");
const ejs = require("ejs");
const app = express();

const path = require("path");
const Photo = require("./models/Photo");
const mongoose = require("mongoose");

//DB connection
mongoose.connect("mongodb://localhost/pcat-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTE
app.get("/", async(req, res) => {
  const photos = await Photo.find({});
  res.render("index", {
    photos,
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add", (req, res) => {
  res.render("add");
});
app.get("*", (req, res) => {
  res.render("notfound");
});

app.post("/photos", async (req, res) => {
  await Photo.create(req.body);
  res.redirect("/");
 

});

const port = 3000;
app.listen(port, () => {
  console.log(`${port} una baglanildi.`);
});

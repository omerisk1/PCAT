// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// //Connect DB
// mongoose.connect("mongodb://localhost/pcat-test-db", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// //Create Schema
// const PhotoSchema = new Schema({
//   title: String,
//   description: String,
// });

// const Photo = mongoose.model("Photo", PhotoSchema);

//create Photo
// Photo.create({
//   title: "Photo Title 2",
//   description: "Photo Description 2 lorem ipsum",
// });

//read a photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

// //update photo
// const id = "62ab89ea0e3c8b9a8ef58444";
// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: "Photo 1 title updated",
//     description: "Photo 1 description updated",
//   },
//   {
//     new: true,
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

//delete photo
// const id = "62ab8ab15f460ba046720ba8";
// Photo.findByIdAndDelete(id, (err, data) => {
//   console.log("photo is removed");
// });

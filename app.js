const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const photo = { id: 1, title: "Blog title", description: "Blog description" };
  res.status(200).send(photo);
});

app.listen(port, () => {
  console.log(`${port} una baglanildi.`);
});

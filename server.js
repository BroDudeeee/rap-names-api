const express = require("express");

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/rapper", (req, res) => {
  res.send("Mother Fucker");
});

app.listen(port, () => console.log(`Server is Running on Port ${port}...`));

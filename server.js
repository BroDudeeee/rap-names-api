const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;
app.use(cors());

const rappers = {
  "21 savage": {
    age: 31,
    birthName: "Sheyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },
  "chance the rapper": {
    age: 30,
    birthName: "Chancelor Bennett",
    birthLocation: "Chicago, Illinois",
  },
  morsy: {
    age: 23,
    birthName: "Ahmed Morsy",
    birthLocation: "Menofia Qwesna",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/rappers/:rapperName", (req, res) => {
  console.log(req.params.rapperName);
  const rapperName = req.params.rapperName.toLowerCase();

  if (rappers[rapperName]) return res.json(rappers[rapperName]);
  else return res.json({ msg: "Sorry don't know that guy!!!" });
});

app.listen(port, () => console.log(`Server is Running on Port ${port}...`));

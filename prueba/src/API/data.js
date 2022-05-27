const express = require("express");
const app = express();

const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const users = [
  { name: "Jose", password: "1234" },
  { name: "Juan", password: "1234" },
  { name: "Malaga", password: "1234" },
];

app.listen(3001, () => {
  console.log("server is running on Port 3001");
});

app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.get("/users/:name", (req, res) => {
  const { name } = req.params;
  const user = users.find((user) => user.name === name);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("Not found");
  }
});

app.post("/users", (req, res) => {
  const user = req.body;
  if (user && user.name && user.password) {
    bcrypt.hash(user.password, saltRounds, function (err, hash) {
      if (err) {
        res.status(500).send("Password is not encrypted");
      } else {
        user.password = hash;
        users.push(user);
        user.name === "Growth"
          ? res.status(201).send("Ok " + hash)
          : res.status(201).send("NO");
      }
    });
  } else {
    res.status(404).send("Name and password are required");
  }
});

const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const users = [
  { name: "Growth", password: "1234" },
  { name: "Juan", password: "1234" },
  { name: "Malaga", password: "1234" }
];

app.listen(3001, () => {
  console.log("server is running on Port 3001");
});

app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.get('/users/:name', (req, res) => {
  const { name } = req.params;
  const user = users.find((user) => user.name === name);
  if (user) res.status(200).send(user);
  else res.status(404).send("Not found");
});

app.post('/users', (req, res)=>{
    const user = req.body;
    users.push(user)
    res.status(201).send('created')
});

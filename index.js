require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let users = []; // id, name, email, address

app.use(bodyParser.json());

//crud

//get all users, Request Method: Get
app.get('/users', (req, res) => {
  res.json(users);
});

// create new user, Request Method: Post
app.post('/users', (req, res) => {
  users.push(req.body);
  res.status(201).json(req.body);
});

// get user by id, Request Method: Get
app.get('/users/:id',(req, res) => {
  let user = users.find(user => user.id === parseInt(req.params.id));
  if (!user) res.status(404).send('The user with the given ID was not found.');
  res.json(user);
})




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


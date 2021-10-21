const mongoose = require("mongoose");
const User = mongoose.model("User");

const getAllUser = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const store = async (req, res) => {
  const { email, password, name, status, phone, address, age } = req.body;
  const user = new User({ email, password, name, status, phone, address, age });
  await user.save();
  delete user.password;
  res.status(201).json(user);
};

// const getById = (req, res) => {
//   let user = users.find((user) => user.id === parseInt(req.params.id));
//   if (!user) res.status(404).send("The user with the given ID was not found.");
//   res.json(user);
// };

module.exports = {
  getAllUser,
  store,
  // getById,
};

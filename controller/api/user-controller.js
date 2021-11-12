const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {create} = require('../../service/user-service');

const profile = (req, res) => {
  let user = { ...req.user.toJSON() };
  delete user.password;
  res.json(user);
};

const getAllUser = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const store = async (req, res) => {
  const user = await create(req.body);
  res.status(201).json(user);
};

const getById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

const update = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "Data not found" });
  }
  user.email = req.body.email;
  user.name = req.body.name;
  user.status = req.body.status;
  user.phone = req.body.phone;
  user.address = req.body.address;
  user.age = req.body.age;
  if (req.body.password) {
    user.password = req.body.password;
  }
  await user.save();
  return res.status(200).json(user);
};

const destroy = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "Data not found" });
  }
  await user.remove();
  return res.status(204).json({});
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ error: "Invalid Email/Password" });
  }
  const matchPassword = await bcrypt.compare(req.body.password, user.password);
  if (!matchPassword) {
    return res.status(401).json({ error: "Invalid Email/Password" });
  }
  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1 h",
  });

  return res.status(200).json({
    token,
  });
};

module.exports = {
  getAllUser,
  store,
  getById,
  update,
  destroy,
  login,
  profile,
};

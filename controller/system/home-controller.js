const { create } = require("../../service/user-service");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = mongoose.model("User");

const home = (req, res) => {
  res.render("pages/home", {
    pageTitle: "Home Page",
    body: "This is example of home page!",
  });
};

const registerView = (req, res) => {
  res.render("pages/register", { pageTitle: "Register" });
};

const loginView = (req, res) => {
  res.render("pages/login", { pageTitle: "Login" });
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    req.flash("alert", {
      type: "danger",
      message: "Invalid credentials",
    });
    return res.redirect("back");
  }
  const matchPassword = await bcrypt.compare(req.body.password, user.password);
  if (!matchPassword) {
    req.flash("alert", {
      type: "danger",
      message: "Invalid credentials",
    });
    return res.redirect("back");
  }
  req.flash("alert", {
    type: "success",
    message: "Login successful",
  });
  return res.redirect("/");
};

const register = async (req, res) => {
  try {
    await create(req.body);
    req.flash("alert", {
      type: "success",
      message: "Registration successful!",
    });
    res.redirect("/");
  } catch (e) {
    req.flash("alert", {
      type: "danger",
      message: "Registration unsuccessful!",
    });
    res.redirect("/");
  }
};

module.exports = {
  home,
  registerView,
  register,
  loginView,
  login,
};

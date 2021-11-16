const { create } = require("../../service/user-service");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = mongoose.model("User");

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
  req.session.user = user;
  req.session.isLogged = true;

  req.flash("alert", {
    type: "success",
    message: "Login successful",
  });
  return res.redirect("/dashboard");
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

const logout = (req, res) => {
  req.session.destroy(() => {
    // req.flash("alert", {
    //   type: "success",
    //   message: "Logout successful",
    // });
    res.redirect("/");
  });
};

module.exports = {
  logout,
  registerView,
  register,
  loginView,
  login,
};

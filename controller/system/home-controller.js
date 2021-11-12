const { create } = require("../../service/user-service");

const home = (req, res) => {
  res.render("pages/home", {
    pageTitle: "Home Page",
    body: "This is example of home page!",
  });
};

const registerView = (req, res) => {
  res.render("pages/register", { pageTitle: "Register" });
};

const register = async (req, res) => {
  try {
    console.log(req.body, req);
    await create(req.body);
    res.redirect("/");
  } catch (e) {
    console.log("🚀 ~ file: home-controller.js ~ line 19 ~ register ~ e", e);
    res.redirect("/");
  }
};

module.exports = {
  home,
  registerView,
  register,
};

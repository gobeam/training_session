const home = (req, res) => {
  res.render("pages/home", {
    pageTitle: "Home Page",
    body: "This is example of home page!",
  });
};

const dashboard = (req, res) => {
  res.render("pages/dashboard", {
    pageTitle: "Dashboard",
    body: "This is dashboard",
  });
};

module.exports = {
  home,
  dashboard,
};

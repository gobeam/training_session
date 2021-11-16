const checkIfLoggedInMiddleware = (req, res, next) => {
  if (req.session.isLogged) {
    next();
    return;
  }
  req.flash("alert", {
    type: "warning",
    message: "You must be logged in to continue!",
  });
  return res.redirect("/login");
};

module.exports = checkIfLoggedInMiddleware;

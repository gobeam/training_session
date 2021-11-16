const express = require("express");
const router = express.Router();
const { home, dashboard } = require("../controller/system/home-controller");
const {
  registerView,
  register,
  loginView,
  login,
  logout,
} = require("../controller/system/auth-controller");
const UserValidator = require("../validator/user-validator");
const LoginValidator = require("../validator/login-validator");
const {
  catchFormValidationError,
} = require("../handler/validation-error-handler");
const checkIfLoggedInMiddleware = require("../middleware/web-middleware");

router.get("/", home);
router.get("/register", registerView);
router.post("/register", UserValidator, catchFormValidationError(register));
router.get("/login", loginView);
router.post("/login", LoginValidator, catchFormValidationError(login));
router.get("/logout", logout);
router.get("/dashboard", checkIfLoggedInMiddleware, dashboard);

module.exports = router;

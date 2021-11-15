const express = require("express");
const router = express.Router();
const {
  home,
  registerView,
  register,
  loginView,
  login,
} = require("../controller/system/home-controller");
const UserValidator = require("../validator/user-validator");
const LoginValidator = require("../validator/login-validator");
const {
  catchFormValidationError,
} = require("../handler/validation-error-handler");

router.get("/", home);
router.get("/register", registerView);
router.post("/register", UserValidator, catchFormValidationError(register));
router.get("/login", loginView);
router.post("/login", LoginValidator, catchFormValidationError(login));

module.exports = router;

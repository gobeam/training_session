const express = require("express");
const router = express.Router();
const {
  getAllUser,
  store,
  getById,
  update,
  destroy,
  login,
} = require("../controller/user-controller");
const UserValidator = require("../validator/user-validator");
const LoginValidator = require("../validator/login-validator");
const catchValidationError = require("../handler/validation-error-handler");

router.post("/login", LoginValidator, catchValidationError(login));
//get all users, Request Method: Get
router.get("/users", getAllUser);

// create new user, Request Method: Post
router.post("/users", UserValidator, catchValidationError(store));

// get user by id, Request Method: Get
router.get("/users/:id", getById);

// update user by id, Request Method: Put
router.put("/users/:id", UserValidator, catchValidationError(update));

// delete user by id, Request Method: Delete
router.delete("/users/:id", destroy);

module.exports = router;

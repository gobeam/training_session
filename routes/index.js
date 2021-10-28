const express = require("express");
const router = express.Router();
const {
  getAllUser,
  store,
  getById,
  update,
  destroy,
  login,
  profile,
} = require("../controller/user-controller");
const UserValidator = require("../validator/user-validator");
const LoginValidator = require("../validator/login-validator");
const catchValidationError = require("../handler/validation-error-handler");
const verifyToken = require("../middleware/auth");

router.post("/login", LoginValidator, catchValidationError(login));
//get all users, Request Method: Get
router.get("/users", verifyToken, getAllUser);

// create new user, Request Method: Post
router.post("/register", UserValidator, catchValidationError(store));

// get user profile, Request Method: Get
router.get("/profile", verifyToken, profile);

// get user by id, Request Method: Get
router.get("/users/:id", verifyToken, getById);

// update user by id, Request Method: Put
router.put(
  "/users/:id",
  [verifyToken, UserValidator],
  catchValidationError(update)
);

// delete user by id, Request Method: Delete
router.delete("/users/:id", verifyToken, destroy);

module.exports = router;

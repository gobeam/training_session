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
} = require("../controller/api/user-controller");
const UserValidator = require("../validator/user-validator");
const LoginValidator = require("../validator/login-validator");
const {catchValidationError} = require("../handler/validation-error-handler");
const ObjectIdCheck = require("../middleware/object-id-check");
const verifyToken = require("../middleware/auth");

router.post("/login", LoginValidator, catchValidationError(login));

// create new user, Request Method: Post
router.post("/register", UserValidator, catchValidationError(store));

// get user profile, Request Method: Get
router.get("/profile", verifyToken, profile);


//get all users, Request Method: Get
router.get("/users", verifyToken, getAllUser);
// get user by id, Request Method: Get
router.get("/users/:id", [ObjectIdCheck, verifyToken], getById);

// update user by id, Request Method: Put
router.put(
  "/users/:id",
  ObjectIdCheck,
  UserValidator,
  catchValidationError(update)
);

// delete user by id, Request Method: Delete
router.delete("/users/:id", verifyToken, destroy);

module.exports = router;

const express = require("express");
const router = express.Router();
const { getAllUser, store, getById, update } = require("../controller/user-controller");
const { getAll, addHobby } = require("../controller/hobby-controller");
const UserValidator = require("../validator/user-validator");
const catchValidationError = require("../handler/validation-error-handler");
//get all users, Request Method: Get
router.get("/users", getAllUser);

// create new user, Request Method: Post
router.post("/users", UserValidator, catchValidationError(store));

router.get("/users/:id", getById);

router.put("/users/:id", UserValidator, catchValidationError(update));

// // get user by id, Request Method: Get
// router.get("/users/:id", getById);

// router.get("/hobby", getAll);
// router.post("/hobby", addHobby);

module.exports = router;

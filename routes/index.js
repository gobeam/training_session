const express = require("express");
const router = express.Router();
const UserController = require("../controller/user-controller");
const HobbyController = require("../controller/hobby-controller");

//get all users, Request Method: Get
router.get("/users", UserController.getAllUser);

// create new user, Request Method: Post
router.post("/users", UserController.store);

// get user by id, Request Method: Get
router.get("/users/:id", UserController.getById);

router.get("/hobby", HobbyController.getAll);
router.post("/hobby", HobbyController.addHobby);

module.exports = router;

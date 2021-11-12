const express = require("express");
const router = express.Router();
const {
  home,
  registerView,
  register
} = require("../controller/system/home-controller");

router.get("/", home);
router.get("/register", registerView);
router.post("/register", register);

module.exports = router;

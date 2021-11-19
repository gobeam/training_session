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
const {
  store,
  index,
  update,
  view,
  destroy,
  createView,
  editView,
} = require("../controller/system/book-controller");
const BookValidator = require("../validator/book-validator");
const ObjectIdCheck = require("../middleware/object-id-check");
const { uploadImageHandler } = require("../handler/image-upload-handle");

router.get("/", home);
router.get("/register", registerView);
router.post("/register", UserValidator, catchFormValidationError(register));
router.get("/login", loginView);
router.post("/login", LoginValidator, catchFormValidationError(login));
router.get("/logout", logout);
router.get("/dashboard", checkIfLoggedInMiddleware, dashboard);

router.get("/books", checkIfLoggedInMiddleware, index);
router.get("/books/create", checkIfLoggedInMiddleware, createView);
router.get("/books/:id", checkIfLoggedInMiddleware, view);
router.post(
  "/books",
  [
    checkIfLoggedInMiddleware,
    uploadImageHandler.single("image"),
    BookValidator,
  ],
  catchFormValidationError(store)
);
router.get("/books/:id/edit", checkIfLoggedInMiddleware, editView);
router.put(
  "/books/:id",
  [
    checkIfLoggedInMiddleware,
    ObjectIdCheck,
    uploadImageHandler.single("image"),
    BookValidator,
  ],
  catchFormValidationError(update)
);
router.delete(
  "/books/:id",
  [checkIfLoggedInMiddleware, ObjectIdCheck],
  destroy
);

module.exports = router;

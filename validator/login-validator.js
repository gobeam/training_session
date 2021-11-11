const { checkSchema } = require("express-validator");

const loginValidator = checkSchema({
  email: {
    isLength: {
      options: { min: 1, max: 255 },
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Invalid email",
    },
    trim: true,
  },
  password: {
    isLength: {
      options: { min: 1, max: 255 },
      errorMessage: "Password is required",
    },
    trim: true,
  },
});

module.exports = loginValidator;

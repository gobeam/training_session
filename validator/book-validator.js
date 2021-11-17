const { checkSchema } = require("express-validator");
const mongoose = require("mongoose");

const BookValidator = checkSchema({
  title: {
    isLength: {
      options: { min: 1, max: 255 },
      errorMessage: "Title is required",
    },
    trim: true,
  },
  description: {
    trim: true,
    isLength: {
      options: { min: 1, max: 500 },
      errorMessage: "Description is required.",
    },
  },
});

module.exports = BookValidator;

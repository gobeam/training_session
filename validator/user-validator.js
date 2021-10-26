const { checkSchema } = require("express-validator");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const UserValidator = checkSchema({
  email: {
    isLength: {
      options: { min: 1, max: 255 },
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Invalid email",
    },
    trim: true,
    custom: {
      options: async (value, { req, location, path }) => {

        let user;
        if (req.method == "PUT") {
          user = await User.findOne({
            $and: [
              {
                _id: {
                  $ne: req.params.id,
                },
              },
              {
                email: value
              }
            ],
          });
        } else {
          user = await User.findOne({ email: value });
        }

        if (user) {
          throw new Error("Email is already taken!");
        }
        return true;
      },
    },
  },
  password: {
    trim: true,
    isLength: {
      options: { min: 6, max: 100 },
      errorMessage:
        "Password is required and must be of minimum length of 6 characters.",
    },
  },
  name: {
    trim: true,
    isLength: {
      options: { min: 1, max: 255 },
      errorMessage: "Name is required",
    },
  },
  status: {
    isBoolean: true,
  },
  phone: {
    trim: true,
    isLength: {
      options: { min: 10, max: 10 },
      errorMessage: "Phone number is required and must be of 10 characters.",
    },
  },
  address: {
    trim: true,
    isLength: {
      options: { min: 1, max: 255 },
      errorMessage: "Address is required",
    },
  },
  age: {
    isInt: {
      options: { min: 1, max: 100 },
      errorMessage:
        "Age is required and must be of minimum length of 1 characters.",
    },
  },
});

module.exports = UserValidator;

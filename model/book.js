const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const Book = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

function populateAuthor(next) {
  this.populate("author");
  next();
}
Book.pre("find", populateAuthor);
Book.pre("findOne", populateAuthor);


module.exports = mongoose.model("Book", Book);

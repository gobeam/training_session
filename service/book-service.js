const mongoose = require("mongoose");
const Book = mongoose.model("Book");

const getAllBooks = async () => {
    return Book.find({});
}

module.exports = {
    getAllBooks
}
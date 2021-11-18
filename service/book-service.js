const mongoose = require("mongoose");
const Book = mongoose.model("Book");

const getAllBooks = async () => {
    return Book.find({});
}

const storeBook = async (data) => {
    return Book.create(data);
}

module.exports = {
    getAllBooks,
    storeBook
}
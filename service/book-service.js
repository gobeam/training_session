const mongoose = require("mongoose");
const Book = mongoose.model("Book");

const getAllBooks = async (condition = {}) => {
    return Book.find(condition);
}

const storeBook = async (data) => {
    return Book.create(data);
}

const getBookById = async (id) => {
    return Book.findById(id);
}

module.exports = {
    getAllBooks,
    storeBook,
    getBookById
}
const {
  getAllBooks,
  storeBook,
  getBookById,
} = require("../../service/book-service");
const fs = require("fs");

const createView = (req, res) => {
  return res.render("pages/book/create", {
    pageTitle: "Create Book",
    book: {},
  });
};

const editView = async (req, res) => {
  const book = await getBookById(req.params.id);
  if (!book) {
    return res.render("pages/errors/404");
  }
  return res.render("pages/book/edit", {
    pageTitle: "Edit Book",
    book,
  });
};

const index = async (req, res) => {
  const books = await getAllBooks({author: req.session.user._id});
  res.render("pages/book/index", {
    pageTitle: "Books Management",
    books,
  });
};

const store = async (req, res) => {
  const data = {
    title: req.body.title,
    description: req.body.description,
    image: req.file ? req.file.filename : null,
    createdAt: new Date(),
    author: req.session.user._id,
  };
  await storeBook(data);
  req.flash("alert", {
    type: "success",
    message: "Book created successfully!",
  });
  res.redirect("/books");
};

const update = async (req, res) => {
  const book = await getBookById(req.params.id);
  if (!book) {
    return res.render("pages/errors/404");
  }
  book.title = req.body.title;
  book.description = req.body.description;
  if (req.file) {
    //delete old image
    const oldImage = `public/uploads/${book.image}`;
    fs.unlinkSync(oldImage);
    book.image = req.file.filename;
  }
  book.updatedAt = new Date();
  await book.save();
  req.flash("alert", {
    type: "success",
    message: "Book updated successfully!",
  });
  res.redirect("/books");
};

const view = (req, res) => {};

const destroy = async (req, res) => {
  const book = await getBookById(req.params.id);
  if (!book) {
    return res.render("pages/errors/404");
  }
  const oldImage = `public/uploads/${book.image}`;
  fs.unlinkSync(oldImage);
  await book.remove();
  req.flash("alert", {
    type: "success",
    message: "Book deleted successfully!",
  });
  res.redirect("/books");
};

module.exports = {
  index,
  store,
  update,
  view,
  destroy,
  createView,
  editView,
};

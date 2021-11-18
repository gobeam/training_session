const { getAllBooks, storeBook } = require("../../service/book-service");

const createView = (req, res) => {
  return res.render("pages/book/create", {
    pageTitle: "Create Book",
  });
};

const index = async (req, res) => {
  const books = await getAllBooks();
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

const update = (req, res) => {};

const view = (req, res) => {};

const destroy = (req, res) => {};

module.exports = {
  index,
  store,
  update,
  view,
  destroy,
  createView,
};

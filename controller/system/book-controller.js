const { getAllBooks } = require("../../service/book-service");

const createView = (req, res) => {
  return res.render("pages/book/create");
}

const index = async (req, res) => {
  const books = await getAllBooks();
  res.render("pages/book/index", {
    pageTitle: 'Books Management',
    books,
  });
};

const store = (req, res) => {};

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

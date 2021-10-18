let users = []; // id, name, email, address

const getAllUser = (req, res) => {
  res.json(users);
};

const store = (req, res) => {
  users.push(req.body);
  res.status(201).json(req.body);
};

const getById = (req, res) => {
  let user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) res.status(404).send("The user with the given ID was not found.");
  res.json(user);
};

module.exports = {
  getAllUser,
  store,
  getById,
};

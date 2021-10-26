const hobby = []; // userId, title

const addHobby = (req, res) => {
  hobby.push(req.body);
  res.json(req.body);
};

const getAll = (req, res) => {
  res.json(hobby);
};

module.exports = {
  addHobby,
  getAll
};

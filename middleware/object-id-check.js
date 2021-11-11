const mongoose = require("mongoose");
const ObjectIdCheck = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      status: 400,
      message: "Invalid ObjectId",
    });
  }

  next();
};

module.exports = ObjectIdCheck;

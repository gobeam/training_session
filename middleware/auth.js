const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const verifyToken = async (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if(!bearerToken){
    return res.status(403).json({
        error: "Authorization token must be provided",
      });
  }
  let token = bearerToken.split(" ");
  if (token.length !== 2) {
    return res.status(403).json({
      error: "Authorization token must be provided",
    });
  }
  try {
    let decodedToken = jwt.verify(token[1], process.env.SECRET_KEY);
    const user = await User.findById(decodedToken.id);
    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({
      error: e.message || 'Invalid token',
    });
  }
};

module.exports = verifyToken;

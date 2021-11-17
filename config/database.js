const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");
  } catch (e) {
      console.error("Error during connection with mongo: ", e);
  }
})();

require("../model/user");
require("../model/book");

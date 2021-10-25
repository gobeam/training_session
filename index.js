require("dotenv").config();
require('./config/database');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const route = require("./routes");
const logMiddleware = require('./middleware/logger');

app.use(bodyParser.json());

//middleware
// app.use(logMiddleware);

app.use("/", route);


//crud

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

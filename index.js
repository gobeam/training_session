require("dotenv").config();
require("./config/database");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const apiRoute = require("./routes/api");
const webRoute = require("./routes/web");
const session = require("express-session");
const cookieParser = require("cookie-parser");
// const logMiddleware = require("./middleware/logger");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    name: "session",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

//middleware
// app.use(logMiddleware);

app.use("/", webRoute);
app.use("/api", apiRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
